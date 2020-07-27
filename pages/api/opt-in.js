import _ from 'lodash'

export default (req, res) => {
  if (req.method === 'POST') {
    console.log('post')
  } else {
    console.log('not post')
  }
  
  const {name, phone} = _.get(req, 'body')
  console.log('🤖 -Server Side - ', req.body)
  res.status(200).json({name, phone});
};
