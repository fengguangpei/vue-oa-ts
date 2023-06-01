<script setup lang="ts">
import { ref } from 'vue'
import { filter, set, lensProp, times, identity, map, compose, lt } from 'ramda'
const name = ref('CarLog')
class Person {
  constructor(public name: string, public age: number) {}
}
type p = (num: number) => { id: number; name: string }
const person: p = (num) => ({
  id: Math.random(),
  name: `person-${num}`
})
type filterPerson = (person: ReturnType<p>) => boolean
const filterPerson: filterPerson = (person) => lt(0.5, person.id)
const personFactory = compose(
  map(set(lensProp<ReturnType<p>, 'name'>('name'), 'name')),
  filter(filterPerson),
  map(person),
  times(identity)
)
console.log(personFactory(10))
</script>

<script lang="ts">
export default {
  name: 'CarLog'
}
</script>

<template>
  <h1>{{ name }}</h1>
</template>

<style scoped lang="scss"></style>
