const test = require('ava')

const { validationTestRunner } = require('../../common/test-utils/index')
const { UserValidator } = require('../user-validator')
const { makeUserData } = require('./user-test-utils')

const validationTester = validationTestRunner(makeUserData, UserValidator)

test(
    'missing email',
    validationTester,
    { email: undefined },
    { email: ['"email" is required'] },
)
test(
    'bad email format type',
    validationTester,
    { email: null },
    { email: ['"email" must be a string'] },
)
test(
    'bad email',
    validationTester,
    { email: 'jhbdfbjd' },
    { email: ['"email" must be a valid email'] },
)

test(
    'missing name',
    validationTester,
    { name: undefined },
    { name: ['"name" is required'] },
)
test(
    'bad name format type',
    validationTester,
    { name: null },
    { name: ['"name" must be a string'] },
)
test(
    'bad name',
    validationTester,
    { name: 'ab' },
    { name: ['"name" length must be at least 3 characters long'] },
)

test(
    'missing password field',
    validationTester,
    { password: undefined },
    { password: ['"password" is required'] },
)

test('valid user', async t => {
    const user = makeUserData()
    const error = await UserValidator.validate(user)
    t.falsy(error)
})