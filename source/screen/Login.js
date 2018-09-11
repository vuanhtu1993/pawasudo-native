import React from 'react';
import { View, Text } from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button} from 'native-base';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{padding: 10, flex: 10, backgroundColor: '#fff'}}>
                <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 16, }}>Pawasudo</Text>
                </View>
                <View style={{flex: 6}}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View style={{height: 20}}/>
                    <Button rounded success block={true}>
                        <Text style={{ color: '#fff' }}>Submit</Text>
                    </Button>
                </View>
            </View>
        );
    }
}