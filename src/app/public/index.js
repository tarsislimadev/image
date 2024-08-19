import { HTML, nButton } from '@brtmvdl/frontend'
import { FormComponent } from './components/form.component.js'
import { InputComponent } from './components/input.component.js'

export class Page extends HTML {
  onCreate() {
    super.onCreate()
    this.append(this.getForm())
  }

  getForm() {
    const form = new FormComponent({ action: 'image' })
    form.append(new InputComponent({ label: 'width', value: '400' }))
    form.append(new InputComponent({ label: 'height', value: '400' }))
    form.append(new InputComponent({ label: 'text', value: 'image' }))
    form.append(this.createButton({ text: 'create' }))
    return form
  }

  createButton({ text = null } = {}) {
    const button = new nButton()
    button.setText(text)
    return button
  }
}
