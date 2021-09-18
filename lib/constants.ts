const numbers_only_pattern = /^(?:\d*)$/
const letters_and_spaces_pattern = /^[a-zA-Z ]*$/

export const required_rule = (arg: boolean) => {
  return { required: arg, message: 'This field is required, please complete it.' }
}

export const min_characters_rule = (arg: number) => {
  return {
    min: arg,
    message: `This field must be at least ${arg} characters long.`,
  }
}

export const max_characters_rule = (arg: number) => {
  return {
    max: arg,
    message: `This field should not be longer than ${arg} characters.`,
  }
}

export const letters_and_spaces_rule = () => {
  return {
    pattern: letters_and_spaces_pattern,
    message: 'This field must contain only letters and spaces.',
  }
}

export const email_rule = () => {
  return {
    type: 'email' as 'email',
    message: 'Please enter your email address in format: yourname@example.com',
  }
}

export const numbers_only_rule = () => {
  return {
    pattern: numbers_only_pattern,
    message: 'This field must contain only numbers',
  }
}

export const dependent_rule = ({ dependency, message }: { dependency: string; message?: string }) => {
  return ({ getFieldValue }: any) => ({
    validator(_: any, value: string | number) {
      if (!value || getFieldValue(dependency) === value) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message ?? 'The two passwords that you entered do not match!'))
    },
  })
}
