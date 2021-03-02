<template>
  <div id="app">
    <BootstrapTable
      ref="table"
      :columns="columns"
      :data="data"
      :options="options"
      @on-post-body="onBsTablePostBody"/>
  </div>
</template>

<script>
import tableMixin from './mixins/table'

export default {
  mixins: [tableMixin],
  data () {
    return {
      columns: [
        {
          field: 'state',
          checkbox: true
        },
        {
          title: 'Item ID',
          field: 'id'
        },
        {
          field: 'name',
          title: 'Item Name'
        },
        {
          field: 'price',
          title: 'Item Price'
        },
        {
          field: 'actions',
          title: 'Actions',
          align: 'center',
          formatter: (value, row) => {
            return this.vueComponent({
              // jsx in vue 知识建议阅读 https://github.com/vuejs/jsx
              render () {
                return <el-button
                  type="primary"
                  size="small"
                  on-click={ () => this.onButtonClick(row) }>
                  Element button { this.row.name }
                </el-button>
              },
              // 如果实在不想写 jsx 的办法：
              // 由于 new Vue({ template }) 需要 full 版本，假如在 webpack 中使用的话，需要修改所有的 vue 的导入：
              // import Vue from 'vue/dist/vue.esm.js'
              // 或者设置 Vue 导入的别名：
              // vue.config.js 中：
              // resolve: {
              //   alias: {
              //     vue$: 'vue/dist/vue.esm.js'
              //   }
              // }
              data () {
                return {
                  row
                }
              },
              methods: {
                onButtonClick: this.onButtonClickInParent
              }
            })
          }
        }
      ],
      data: {
        total: 5,
        rows: [
          {
            id: 1,
            name: 'Item 1',
            price: '$1'
          },
          {
            id: 2,
            name: 'Item 2',
            price: '$2'
          },
          {
            id: 3,
            name: 'Item 3',
            price: '$3'
          },
          {
            id: 4,
            name: 'Item 4',
            price: '$4'
          },
          {
            id: 5,
            name: 'Item 5',
            price: '$5'
          }
        ]
      },
      options: {
        search: true,
        showColumns: true,
        showExport: true
      }
    }
  },
  methods: {
    onButtonClickInParent (row) {
      alert(JSON.stringify(row, null, 2))
    }
  }
}
</script>
