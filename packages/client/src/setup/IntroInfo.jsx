import React from 'react'
import { Stack } from '@chakra-ui/core'

import { Heading1, Heading3, Heading4 } from '@/common/ui'

export default function Setup() {
    return (
        <Stack spacing={8}>
            <Heading1>Welcome 👋</Heading1>
            <Heading3>Matterwiki is a simple wiki for small teams.</Heading3>
            <Heading4>
                People use it to store documentation, notes, culture guidelines,
                employee onboarding content and everything they want to.
            </Heading4>
        </Stack>
    )
}