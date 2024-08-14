import * as React from "react";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";

export default function FormInfo() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <Form
                actions={
                    <Button fullWidth variant="primary">
                        Register
                    </Button>
                }
                header={<Header variant="h1">Your Information</Header>}
            >
                <Container>
                    <SpaceBetween direction="vertical" size="l">
                        <FormField label="Name">
                            <Input />
                        </FormField>
                        <FormField label="Email">
                            <Input />
                        </FormField>
                        <FormField label="Company">
                            <Input />
                        </FormField>
                    </SpaceBetween>
                </Container>
            </Form>
        </form>
    );
}