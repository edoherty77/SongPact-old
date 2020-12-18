import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import PactButton from "../PactButton"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { listPacts } from "../../src/graphql/Queries"

const AllList = () => {
  const [pacts, setPacts] = useState([])
  const getPacts = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listPacts))
      setPacts(data)
    } catch (err) {
      console.log("error: ", err)
    }
    console.log("pacts:", pacts)
  }

  useEffect(() => {
    getPacts()
  }, [])

  return (
    <View style={styles.pactList}>
      <PactButton status="pending" name="Mark" title="Adrift" type="Remix" />
      <PactButton
        status="pending"
        name="Stephan"
        title="A Walk"
        type="Producer"
      />
      <PactButton status="closed" name="Me" title="Closer" type="Beat" />
      <PactButton status="closed" name="Seth" title="Orbit" type="Remix" />
      <PactButton status="pending" name="Me" title="Around" type="Producer" />
    </View>
  )
}

const styles = StyleSheet.create({
  pactList: {
    padding: 10,
    // backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    elevation: 1,
    shadowColor: "rgb(50,50,50)",
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
})

export default AllList
