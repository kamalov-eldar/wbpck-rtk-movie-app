import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SwitchingTypeCards } from "./SwitchingTypeCards";

export default {
    title: "shared/ArticleViewSelector",
    component: SwitchingTypeCards,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof SwitchingTypeCards>;

const Template: ComponentStory<typeof SwitchingTypeCards> = (args) => <SwitchingTypeCards {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
