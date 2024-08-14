import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { Link } from "@cloudscape-design/components";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default function CardItem() {
    const [
        selectedItems,
        setSelectedItems
    ] = React.useState([{ name: "Item 2" }]);
    return (
        <Cards
            // onSelectionChange={({ detail }) =>
            //     setSelectedItems(detail?.selectedItems ?? [])
            // }
            // selectedItems={selectedItems}
            // ariaLabels={{
            //     itemSelectionLabel: (e, t) => `select ${t.name}`,
            //     selectionGroupLabel: "Item selection"
            // }}
            cardDefinition={{
                header: item => (

                    <Header>
                        {item.name}
                    </Header>
                ),
                sections: [
                    {
                        id: "image",
                        content: item => (
                            <img
                                style={{ width: "50%" }}
                                src={item.image}
                                alt="placeholder"
                            />
                        )
                    },
                    // {
                    //     id: "description",
                    //     header: (
                    //         <div
                    //             style={{
                    //                 display: "flex",
                    //                 flexDirection: "row",
                    //                 justifyContent: "space-between"
                    //             }}
                    //         >
                    //             <span>Description</span>

                    //         </div>
                    //     ),
                    //     content: item => <div>{item.description}</div>
                    // }
                ]
            }}
            cardsPerRow={[
                { cards: 1 },
                { minWidth: 500, cards: 3 }
            ]}
            items={[
                {
                    name: "T-shirt",
                    alt: "First",
                    description: "The First Cloud",
                    image: "https://assets-fcj.s3.ap-southeast-1.amazonaws.com/ao.jpg"

                },
                {
                    name: "Item 2",
                    alt: "Second",
                    description: "This is the second item",
                    image: "https://assets-fcj.s3.ap-southeast-1.amazonaws.com/WhatsApp+Image+2024-08-14+at+14.23.27_4029f699.jpg"

                },
                {
                    name: "Item 3",
                    alt: "Third",
                    description: "This is the third item",
                    image: "https://assets-fcj.s3.ap-southeast-1.amazonaws.com/WhatsApp+Image+2024-08-14+at+14.23.37_d65cab7a.jpg"

                }
            ]}
            loadingText="Loading resources"
            selectionType="multi"
            trackBy="name"
            visibleSections={[
                "image",
                "description"
            ]}
            empty={
                <Box
                    margin={{ vertical: "xs" }}
                    textAlign="center"
                    color="inherit"
                >
                    <SpaceBetween size="m">
                        <b>No resources</b>
                        <Button>Create resource</Button>
                    </SpaceBetween>
                </Box>
            }
        // header={
        //     <Header
        //     // counter={
        //     //     selectedItems?.length
        //     //         ? "(" + selectedItems.length + "/10)"
        //     //         : "(10)"
        //     // }
        //     >
        //         Cards with actions
        //     </Header>
        // }
        />
    );
}