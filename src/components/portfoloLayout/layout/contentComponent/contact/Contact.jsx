import React from "react";
import { Button, Form, Input, message } from "antd";
import "./contact.css";
import emailjs from "@emailjs/browser";
const { TextArea } = Input;
export const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
    emailjs
      .send(
        "service_qmz6i3d",
        "template_gt67y52",
        {
          to_name: "Rolando",
          name: values.user_name,
          email: values.user_email,
          message: values.message,
        },
        "aQvOCMZWcBQTJ8MOU"
      )
      .then(() => {
        message.success("Mail successfully send");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFinishFailed = (error) => {
    message.error("Please fill all the form");
  };
  return (
    <section id="contact" className={"portfolio--contact"}>
      <Form
        name="contact Form"
        className="portfolio--contact-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>Contact ME</h3>
        <Form.Item
          name="user_name"
          lablel="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            className="portfolio--form-item"
            maxLength={30}
            size="large"
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item
          name="user_email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input
            className="portfolio--form-item"
            size="large"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[
            {
              required: true,
              message: "Please input your message!",
            },
          ]}
        >
          <TextArea
            className="portfolio--form-item"
            size="large"
            placeholder="Message"
            autoSize={{ minRows: 3, maxRows: 4 }}
            maxLength={500}
          />
        </Form.Item>
        <Form.Item>
          <Button
            className="portfolio--form-item-btn"
            size="large"
            block
            type="primary"
            htmlType="submit"
          >
            Send Email
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
