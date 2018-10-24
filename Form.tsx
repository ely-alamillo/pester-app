import * as React from "react";
import { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Textarea,
  Left,
  Body,
  Title,
  Right,
  Button,
  Text,
  Icon
} from "native-base";

enum Carriers {
  MetroPCS,
}

interface InputFormState {
  phoneNumber: string;
  message: string;
  carrier: Carriers | string;
}
export default class FormExample extends Component<{}, InputFormState> {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      message: "",
      carrier: "",
    };
  }

  public render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Send Message</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Phone Number"
                keyboardType={"number-pad"}
                onChangeText={text => this.setState({ phoneNumber: text })}
              />
            </Item>
            <Item last>
              <Textarea
                placeholder="Message"
                rowSpan={5}
                onChangeText={text => this.setState({ message: text })}
              />
            </Item>
          </Form>
          <Button
            bordered
            success
            iconRight
            onPress={() => console.log({ state: this.state })}
          >
            <Text>Submit</Text>
            <Icon type="FontAwesome" name="paper-plane-o" />
          </Button>
        </Content>
      </Container>
    );
  }
}
