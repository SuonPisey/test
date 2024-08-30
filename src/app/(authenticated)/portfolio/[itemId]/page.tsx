'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Spin, Card } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PortfolioItemPage() {
  const router = useRouter()
  const params = useParams<{ itemId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: project,
    isLoading,
    refetch,
  } = Api.project.findUnique.useQuery({
    where: { id: params.itemId },
    include: { user: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!project) {
    enqueueSnackbar('Project not found', { variant: 'error' })
    router.push('/portfolio')
    return null
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{project.title}</Title>
      <Paragraph>{project.description}</Paragraph>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Text strong>Project Details</Text>
            <Paragraph>
              <Text>Created by: {project.user?.name}</Text>
            </Paragraph>
            <Paragraph>
              <Text>
                Created on: {dayjs(project.dateCreated).format('MMMM D, YYYY')}
              </Text>
            </Paragraph>
            {project.link && (
              <Paragraph>
                <LinkOutlined />{' '}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </Paragraph>
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
