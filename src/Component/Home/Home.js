import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import "./Home.css";
import CardItem from "../Card-Item";
import FormInfo from "../Form-Info";

export default function Home() {
    return (
        <div className="customer-home">
            <ContentLayout
                defaultPadding
                disableOverlap
                headerVariant="high-contrast"
                header={
                    <Header
                        variant="h1"
                        description="18 September, 2024 | JW Marriott Hotel Hanoi"
                    >
                        Cloud Day Vietnam Gift
                    </Header>
                }
            >
                <Box variant="h1" padding={{ top: "m", bottom: "m" }}>
                    Gift from First Cloud Journey
                </Box>
                <CardItem />
                {/* <Button fullWidth variant="primary">
                    Register
                </Button> */}
                <FormInfo />
            </ContentLayout>
        </div>
    );
}