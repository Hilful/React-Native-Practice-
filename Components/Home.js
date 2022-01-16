import React from 'react'
import { View, Text , Button } from 'react-native'

export default function Home() {
    return (
        <View>
            <Text>This is Home</Text>
            <Button
                onPress={e => alert("Hello!!This is my sweet Home")}
                title="Press Me"
                color="#841584"
            />
        </View>
    )
}
