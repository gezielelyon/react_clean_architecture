import { RemoteAuthentication } from '@/data/usecases/authentication/remoteAuthentication'
import { IHttpPostClient } from '@/data/protocols/http/httpPostClient'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements IHttpPostClient {
      url?: string

      public async post (url: string): Promise<void> {
        this.url = url

        return await Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)

    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
