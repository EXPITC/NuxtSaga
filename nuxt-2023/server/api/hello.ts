export default defineEventHandler((e) => {
  setResponseStatus(e, 200)
  return {
    hello: 'world'
  }
})
