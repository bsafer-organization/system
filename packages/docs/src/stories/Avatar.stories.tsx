import { Avatar, AvatarProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Avatar',
  component: Avatar,
  args: {
    size: 'md'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl'] as PropsToArray<AvatarProps['size']>
    }
  }
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {
  args: {
    name: 'Felipe Oliveira'
  }
}

export const WithImage: StoryObj<AvatarProps> = {
  args: {
    name: 'Felipe Oliveira',
    imageURL:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=300&q=80'
  }
}
