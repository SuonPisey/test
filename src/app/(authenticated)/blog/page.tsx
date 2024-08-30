'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BlogPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: posts,
    isLoading,
    refetch,
  } = Api.postData.findMany.useQuery({
    include: {
      user: true,
      comments: true,
      postCategorys: { include: { category: true } },
    },
  })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Blog</Title>
      <Paragraph>
        Read our latest blog posts to gain insights and information shared by
        the website owner.
      </Paragraph>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {posts?.map(post => (
            <Col key={post.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                title={post.title}
                onClick={() => router.push(`/blog/${post.id}`)}
                extra={<CalendarOutlined />}
              >
                <Paragraph ellipsis={{ rows: 3 }}>{post.content}</Paragraph>
                <Paragraph type="secondary">
                  {dayjs(post.datePublished).format('MMMM D, YYYY')}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
