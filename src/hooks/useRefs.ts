import {
  type Ref,
  type ComponentPublicInstance,
  onBeforeUpdate,
  shallowRef
} from 'vue'

export const useRefs = (): {
  refs: Ref<(Element | ComponentPublicInstance | null)[]>
  setRefs: (
    index: number
  ) => (el: Element | ComponentPublicInstance | null) => void
} => {
  const refs = shallowRef([]) as Ref<
    (Element | ComponentPublicInstance | null)[]
  >

  const setRefs =
    (index: number) => (el: Element | ComponentPublicInstance | null) => {
      refs.value[index] = el
    }

  onBeforeUpdate(() => {
    refs.value = []
  })

  return {
    refs,
    setRefs
  }
}
