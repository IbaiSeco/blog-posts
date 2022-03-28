import { render, screen } from '@testing-library/react'
import Comment from '../../components/comment';
import SampleJson from '../sampleJson';


describe('Comment component renders without errors', () => {
  it('renders comment component', () => {
    render(
        <Comment
            title={SampleJson.comments[0].title} 
            description={SampleJson.comments[0].description}
            createdAt={SampleJson.comments[0].createdAt}
            updatedAt={SampleJson.comments[0].updatedAt}
            id={SampleJson.comments[0].id}
            postId={SampleJson.comments[0].postId}
        />
    )

    const heading = screen.getByRole('heading', {
      name: "Qui quo non omnis tenetur.",
    })
    expect(heading).toBeInTheDocument()
  })
})