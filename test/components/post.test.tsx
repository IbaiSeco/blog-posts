import { render, screen } from '@testing-library/react'
import Post from '../../components/post';
import SampleJson from '../sampleJson';


describe('Post component renders without errors', () => {
  it('renders post', () => {
    render(
        <Post 
            title={SampleJson.title} 
            description={SampleJson.description}
            createdAt={SampleJson.createdAt}
            updatedAt={SampleJson.updatedAt}
            id={SampleJson.id}
            authors={SampleJson.authors}
            comments={SampleJson.comments} 
        />
    )

    const heading = screen.getByRole('heading', {
      name: "title 1",
    })
    expect(heading).toBeInTheDocument()

    const comments = screen.getByRole('button', {
        name: "2 Comments"
    })
    expect(comments).toBeInTheDocument()
  })
})