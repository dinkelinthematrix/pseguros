<template>
  <div class="space-y-12 flex flex-col justify-center">
    <div class="flex w-full content-center border-b px-2">
      <div class="flex text-left grow max-w-[1150px] w-full mx-auto py-8">
        <h2 class="text-left grow content-center">Sucursales</h2>
      </div>
    </div>
    <div class="flex text-left grow max-w-[1150px] flex-col w-full mx-auto py-8">
      <template v-for="province in provincesWithBranches" :key="province.id">
        <h2 class="font-bold border-t border-gray-100 pt-5 pl-1">{{ province.nombre }}</h2>
        <ul role="list" class="divide-y divide-gray-100">
          <template v-for="(branch, index) in province.sucursales" :key="index">
            <li
              v-if="province.sucursales.length > 0"
              class="flex justify-between gap-x-6 py-5 flex-col sm:flex-row"
            >
              <div class="flex min-w-0 gap-x-4 pl-1">
                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">
                    {{ branch.address }}
                  </p>
                  <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ branch.email }}</p>
                </div>
              </div>
              <div class="shrink-0 sm:flex sm:flex-col sm:items-end pl-1">
                <p class="text-sm leading-6 text-gray-900">{{ branch.phone }}</p>
                <p class="mt-1 text-xs leading-5 text-gray-500">{{ branch.hours }}</p>
                <p class="mt-1 text-xs leading-5 text-gray-500">{{ branch.person }}</p>
              </div>
            </li>
          </template>
          <li class="flex justify-between gap-x-6 py-5" v-if="province.sucursales.length === 0">
            <p class="text-sm font-semibold leading-6 text-gray-900 pl-1">Sin sucursales</p>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { fetchStatesData, fetchBranchesData } from '@/services/api'

const { isFetchingProvinces, errorProvinces, provincias } = await fetchStatesData()
const { data } = await fetchBranchesData()
const { sucursales } = data
const filterProvincesIds = ['06', '94', '58', '14', '54', '82']
const provincesOptions = ref(
  provincias.value.provincias.filter((provincia) => filterProvincesIds.includes(provincia.id))
)

const provincesWithBranches = ref(
  provincesOptions.value.map((option) => {
    option.sucursales = sucursales.filter((sucursal) => sucursal.id === option.id)
    return option
  })
)
</script>
