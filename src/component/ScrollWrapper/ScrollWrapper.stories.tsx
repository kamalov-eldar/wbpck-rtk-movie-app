import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ScrollWrapper } from "./ScrollWrapper";

export default {
    title: "shared/Page",
    component: ScrollWrapper,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ScrollWrapper>;

const Template: ComponentStory<typeof ScrollWrapper> = (args) => <ScrollWrapper {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
