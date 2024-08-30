'use client'

import { Typography, Row, Col, Button } from 'antd'
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  BookOutlined,
  MailOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <PageLayout layout="narrow">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Welcome to Our Website</Title>
          <Paragraph>
            Explore our website to learn more about what we offer. Navigate
            through different sections to find more content.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Button
            type="primary"
            icon={<HomeOutlined />}
            block
            onClick={() => navigateTo('/home')}
          >
            Home
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Button
            type="primary"
            icon={<InfoCircleOutlined />}
            block
            onClick={() => navigateTo('/about')}
          >
            About
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Button
            type="primary"
            icon={<AppstoreOutlined />}
            block
            onClick={() => navigateTo('/portfolio')}
          >
            Portfolio
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Button
            type="primary"
            icon={<BookOutlined />}
            block
            onClick={() => navigateTo('/blog')}
          >
            Blog
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Button
            type="primary"
            icon={<MailOutlined />}
            block
            onClick={() => navigateTo('/contact')}
          >
            Contact
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
