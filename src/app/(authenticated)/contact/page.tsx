'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Input, Button, Row, Col, Space } from 'antd'
import { MailOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ContactPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()

  const { mutateAsync: createMessage } = Api.message.create.useMutation()

  const handleSubmit = async (values: Prisma.MessageCreateInput) => {
    try {
      await createMessage({ data: values })
      enqueueSnackbar('Message sent successfully!', { variant: 'success' })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to send message. Please try again.', {
        variant: 'error',
      })
    }
  }

  const { data: owner, isLoading } = Api.user.findUnique.useQuery({
    where: { id: 'owner-id' }, // Replace with the actual owner ID
    include: { messages: true },
  })

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Contact Us</Title>
      <Paragraph>
        If you have any questions or inquiries, please fill out the form below
        to send us a message. Alternatively, you can reach out to us directly
        using the contact information provided.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input type="email" placeholder="Your email" />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: 'Please enter the subject' }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="content"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} placeholder="Your message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <Space direction="vertical" size="middle">
            <Title level={4}>Contact Information</Title>
            <Text>
              <MailOutlined /> Email: {owner?.email}
            </Text>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
