import { HTML, nInput } from '@brtmvdl/frontend'

export class InputComponent extends HTML {
  children = {
    label: new HTML(),
    input: new nInput(),
  }

  state = {
    name: null,
    label: null,
    value: null,
  }

  constructor({ label = '', value = '' } = {}) {
    super()
    this.state.name = label
    this.state.label = label
    this.state.value = value
  }

  onCreate() {
    super.onCreate()
    this.append(this.getLabel())
    this.append(this.getInput())
  }

  getLabel() {
    this.children.label.setText(this.state.label)
    return this.children.label
  }

  getInput() {
    this.children.input.setAttr('name', this.state.name)
    if (this.state.value)
      this.children.input.setValue(this.state.value)
    return this.children.input
  }
}
