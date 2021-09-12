import { Meta, Story } from "@storybook/react/types-6-0"
import { mobileViewportParams } from "@utils/storybook"

import YesComponent, { YesProps } from "./index"

export default {
  title: "Components/Yes",
  component: YesComponent,
} as Meta

const Template: Story<YesProps> = (args) => <YesComponent {...args} />

export const Desktop = Template.bind({})
Desktop.args = {}

export const Mobile = Template.bind({})
Mobile.args = {}
Mobile.parameters = mobileViewportParams
