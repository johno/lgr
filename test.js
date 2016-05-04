import test from 'ava'
import stream from 'stream'
import through from 'through'
import lgr from './'

test('lgr does something awesome', t => {
  const s = new stream.Readable
  s._read = function(){}

  const log = `
2016-05-04T13:44:02.702760+00:00 heroku[router]: at=info method=POST path="/api/hello.json" host=fred.flintstone.com request_id=foobarbaz fwd="12.34.56.78" dyno=web.5 connect=1ms service=85ms status=200 bytes=515
2016-05-04T13:44:02.702760+00:00 heroku[router]: at=info method=POST path="/api/hello.json" host=fred.flintstone.com request_id=foobarbaz fwd="12.34.56.78" dyno=web.5 connect=1ms service=85ms status=200 bytes=515
`
  s.push(log)
  s.push(null)

  s.pipe(lgr()).pipe(through(data => {
    t.is(data.method, 'POST')
  }))
})
