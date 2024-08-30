'use client'

import { Typography, Row, Col, Spin, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AboutPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: userData, isLoading } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: {
      posts: true,
      projects: true,
      userSkills: { include: { skill: true } },
    },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!userData) {
    enqueueSnackbar('User data not found', { variant: 'error' })
    return (
      <PageLayout layout="narrow">
        <Title level={2}>User not found</Title>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ marginBottom: '20px' }}>
        <Col>
          <Avatar size={64} icon={<UserOutlined />} src={userData.pictureUrl} />
        </Col>
      </Row>
      <Title level={2}>About {userData.name}</Title>
      <Paragraph>
        Welcome to the personal page of {userData.name}. Here you can learn more
        about their background, interests, and projects.
      </Paragraph>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Title level={4}>Background</Title>
          <Paragraph>
            {userData.name} has been involved in various projects and has a
            diverse set of skills. They have worked on numerous posts and
            projects, showcasing their expertise and interests.
          </Paragraph>
        </Col>
        <Col xs={24} sm={12}>
          <Title level={4}>Interests</Title>
          <Paragraph>
            {userData.name} is passionate about technology, innovation, and
            continuous learning. Their interests span across different fields,
            including software development, project management, and more.
          </Paragraph>
        </Col>
      </Row>
    </PageLayout>
  )
}
