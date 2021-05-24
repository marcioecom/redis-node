import Queue from 'bull'
import redisConfig from '../../config/redis'

import RegistrationMail from '../jobs/RegistrationMail'

const mailQueue = new Queue(RegistrationMail.key, redisConfig)

export default mailQueue
