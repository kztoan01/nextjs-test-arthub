import axiosCourses from "../axiosCourse"

describe('axiosCourse lib function', () => {

    it('should return the correct number of courses', async () => {
        const coursesArray = await axiosCourses()
        expect(coursesArray.length).toBe(6)
    })

})