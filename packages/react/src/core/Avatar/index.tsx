import { Text, TextProps } from '../Text'

type AvatarSizeTypes = 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps {
  /**
   * @description Avatar use first letter from name and lastname.
   * The name is ignored if it is better than 3 letters
   * @example `John Doe Stallone` -> `JD`
   */
  name: string
  /**
   *
   * @description If the imageURL property is filled, the name property is ignored
   * @default undefined
   */
  imageURL?: string
  /**
   * @description Avatar have the same value in width and height with full rounded. Available sizes:
   * - sm: 1.5rem   [24px]
   * - md: 2rem     [32px]
   * - lg: 2.5rem   [40px]
   * - xl: 3.5rem   [56px]
   *
   *
   * @default "md"
   */
  size?: AvatarSizeTypes
}

/**
 * @description Show person name or image in a circular box
 * @param AvatarProps
 * @returns `<Avatar name="John Doe" />`
 */
export const Avatar = ({ size = 'md', imageURL, name }: AvatarProps) => {
  const initials = name
    ?.split(' ')
    .filter((word) => word.length > 2)
    .filter((_word, index) => index < 2)
    .map((name) => name.charAt(0))
    .join('')

  return (
    <div
      className={`${sizes[size].size} overflow-hidden rounded-full ${
        !imageURL ? 'bg-grey-800' : ''
      }`}
    >
      {!imageURL && (
        <div className="flex justify-center items-center h-full">
          <Text
            className={`leading-none`}
            color="white"
            size={sizes[size].fontSize}
          >
            {initials}
          </Text>
        </div>
      )}

      {imageURL && (
        <img
          src={imageURL}
          className={`${sizes[size].size} object-cover object-center`}
          alt={name}
        />
      )}
    </div>
  )
}

const sizes: {
  [size in AvatarSizeTypes]: {
    size: string
    fontSize: TextProps['size']
  }
} = {
  sm: {
    size: 'w-6 h-6',
    fontSize: 'xs'
  },
  md: {
    size: 'w-8 h-8',
    fontSize: 'md'
  },
  lg: {
    size: 'w-10 h-10',
    fontSize: 'lg'
  },
  xl: {
    size: 'w-14 h-14',
    fontSize: '2xl'
  }
}
