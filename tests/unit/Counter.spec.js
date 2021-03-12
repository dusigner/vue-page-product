import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter', () => {
    test('Initial state is zero', () => {
        // Arrange
        const wrapper = mount(Counter)
        // Assert
        expect(wrapper.html()).toContain(0)
    })

    test('Increment counter by 1 with no props', async () => {
        // Arrange
        const wrapper = mount(Counter)
        const button = wrapper.find('button')
        // Act
        await button.trigger('click')
        // Assert
        expect(wrapper.html()).toContain(1)
    })
})