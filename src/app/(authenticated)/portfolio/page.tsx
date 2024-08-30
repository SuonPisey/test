'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { PictureOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PortfolioPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: projects,
    isLoading,
    refetch,
  } = Api.project.findMany.useQuery({
    include: { user: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Portfolio</Title>
      <Text>Here are some examples of my work and projects.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {projects?.map(project => (
          <Col xs={24} sm={12} md={8} lg={6} key={project.id}>
            <Card
              hoverable
              cover={
                project.link ? (
                  <img alt={project.title} src={project.link} />
                ) : (
                  <PictureOutlined
                    style={{ fontSize: '48px', padding: '20px' }}
                  />
                )
              }
              onClick={() => router.push(`/portfolio/${project.id}`)}
            >
              <Card.Meta
                title={project.title}
                description={project.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
