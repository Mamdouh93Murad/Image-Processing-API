import app from '../index'
import supertest from 'supertest'

const request = supertest(app)
// eslint-disable-next-line no-undef
describe('Test Default End Point', (): void => {
  // eslint-disable-next-line no-undef
  it('Gets Status of End Point', async (done: DoneFn): Promise<void> => {
    const response = await request.get('/')
    // eslint-disable-next-line no-undef
    expect(response.status).toBe(200)
    done()
  })
})
