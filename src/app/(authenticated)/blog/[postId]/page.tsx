'use client'

import { Prisma } from '@prisma/client'
import { Typography, Spin, Row, Col } from 'antd'
import { CalendarOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BlogPostPage() {
  const router = useRouter()
  const params = useParams<{ postId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: post,
    isLoading,
    refetch,
  } = Api.post.findUnique.useQuery({
    where: { id: params.postId },
    include: { user: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!post) {
    enqueueSnackbar('Post not found', { variant: 'error' })
    router.push('/blog')
    return null
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={1}>{post.title}</Title>
          <Text type="secondary">
            <CalendarOutlined />{' '}
            {dayjs(post.datePublished).format('MMMM D, YYYY')}
          </Text>
          <br />
          <Text type="secondary">
            <UserOutlined /> {post.user?.name}
          </Text>
          <Paragraph>{post.content}</Paragraph>
        </Col>
      </Row>
    </PageLayout>
  )
}
