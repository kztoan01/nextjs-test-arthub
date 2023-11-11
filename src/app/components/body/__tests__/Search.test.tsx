import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from '../Search'

type Course =
    {
        id: number,
        name: string,
        image: string,
        description: string,
        level: string,
        language: string,
        price: number,
        coupon: number,
        instructorName: string,
    }
const mockCourses = [
    {
        "id": 38,
        "name": "Complete Blender Creator: Learn 3D Modelling for Beginners",
        "image": "70c7f0b7f56f73b1e66c44333cc2af0b.jpg",
        "description": "Use Blender to Create Beautiful 3D models for Video Games, 3D Printing & More. Beginners Level Course",
        "level": "Beginner",
        "language": "English",
        "price": 102.0,
        "coupon": 0.0,
        "instructorName": "Toan Tran",
    },
    {
        "id": 42,
        "name": "The Ultimate Drawing Course - Beginner to Advanced",
        "image": "3d-detail-01.png",
        "description": "Learn the #1 most important building block of all art, Drawing. This course will teach you how to draw like a pro!",
        "level": "Beginner",
        "language": "English",
        "price": 94.0,
        "coupon": 0.0,
        "instructorName": "Toan Tran",
    },
]
const mockSetTodos = jest.fn()

describe('Search', () => {

    describe('Render', () => {

        it('should render the input', () => {
            render(<Search courses={mockCourses} />) // ARRANGE

            const input = screen.getByPlaceholderText('e.g Caricature') //ACT

            expect(input).toBeInTheDocument()// ASSERT
        })
        
        it('should render the text Search Courses', () => {
            render(<Search courses={mockCourses} />)

            const text = screen.getByText(/Search Courses/i)

            expect(text).toBeInTheDocument()
        })

        it('should render the intructor name - Toan', async () => {
            render(<Search courses={[]} />)

            const message = screen.getByText('There are no courses')

            expect(message).toBeInTheDocument()// ASSERT
        })

        it('should render a list with the correct number of items', () => {
            render(
                <Search courses={mockCourses} />
            ) // ARRANGE
    
            //ACT
            const coursesArray = screen.getAllByRole('article')
    
            expect(coursesArray.length).toBe(2)// ASSERT
        })

        //test fail
        it('should render the courses in the correct order', () => {
            render(
                <Search courses={mockCourses} />
            ) // ARRANGE
    
            //ACT
            const firstItem = screen.getAllByTestId("course-price")[1]
    
            expect(firstItem).toHaveTextContent("$94")// ASSERT
        })

    
    })

    describe('Behavior', () => {

        it('should be able to add text to the input', async () => {
            render(<Search courses={mockCourses} />) // ARRANGE

            const input = screen.getByPlaceholderText('e.g Caricature') //ACT
            await userEvent.type(input, 'Learn how to draw')
            expect(input).toHaveValue("Learn how to draw")// ASSERT
        })

        // it('should enable the submit button when text is input', async () => {
        //     render(<Search/>) // ARRANGE

        //     const input = screen.getByPlaceholderText('New Todo') //ACT
        //     await userEvent.type(input, 'hey there')

        //     const button = screen.getByRole('button', {
        //         name: 'Submit'
        //     })

        //     expect(button).toBeEnabled() // ASSERT
        // })

        // it('should empty the text input when submitted', async () => {
        //     render(<Search/>) // ARRANGE

        //     const input = screen.getByPlaceholderText('New Todo') //ACT
        //     await userEvent.type(input, 'hey there')
        //     const button = screen.getByRole('button', {
        //         name: 'Submit'
        //     })
        //     await userEvent.click(button)

        //     expect(input).toHaveValue("")// ASSERT
        // })

        // it('should call setTodos when submitted', async () => {
        //     render(<Search/>) // ARRANGE

        //     const input = screen.getByPlaceholderText('New Todo') //ACT
        //     await userEvent.type(input, 'hey there')
        //     const button = screen.getByRole('button', {
        //         name: 'Submit'
        //     })
        //     await userEvent.click(button)

        //     expect(mockSetTodos).toBeCalled()// ASSERT
        // })

    })

})