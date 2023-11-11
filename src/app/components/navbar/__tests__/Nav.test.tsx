import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from '../Nav'

describe('Nav', () => {

    it('should render the text Search Courses', () => {
        render(<Nav />)
        const text = screen.getByText(/Categories/i)
        expect(text).toBeInTheDocument()
    })

    it('should render the text Notifications', () => {
        render(<Nav />)
        const text = screen.getByText(/Notifications/i)
        expect(text).toBeInTheDocument()
    })

    
    it('should close banner after click', async() => {
        render(<Nav />)
        const button = screen.getByTestId('banner')
        await userEvent.click(button)
        const data = await screen.queryByText(/ArtHub 2023/i)
        expect(data).not.toBeInTheDocument()
    })


})