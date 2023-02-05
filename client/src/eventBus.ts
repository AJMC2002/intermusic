import { ref } from "vue";

const bus = ref<Map<string, string>>(new Map());

export default function useEventBus() {
	function emit(event: string, value: string) {
		bus.value.set(event, value);
	}

	return {
		emit,
		bus,
	};
}
