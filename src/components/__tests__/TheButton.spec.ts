import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import component from '../atoms/TheButton.vue'

describe('TheButton.vue', () => {
  describe('when mounted', () => {
    it('renders properly', () => {
      // Test goes here
      const wrapper = mount(component, {})
      expect(wrapper.html()).toContain('button')
    })
    it('defaults to light theme', () => {
      const wrapper = mount(component, {})
      expect(wrapper.classes()).toContain('light')
    })
    it('when dark theme props set, it modifies its style', () => {
      const wrapper = mount(component, {
        props: { value: 'Test Dark', width: '100px', theme: 'dark' },
        // props: {
        //   theme: 'dark',
        // },
      })
      expect(wrapper.classes()).toContain('dark')
    })
  })
})
