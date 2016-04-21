import StrictDuck, { nameClass, extend, implement  } from 'strictduck'
import resolve from './resolve'

export const Provider = extend({ name: 'Provider', methods: ['provide'] })

export default function provides({
    name, provider,
    parent = StrictDuck,
    dependencies=[]
}) {
    return nameClass({
        name: name || parent.name,
        Class: class extends parent {
            constructor(...args){
                super(...args)
                this.provide = function provide({container, ...kwargs}={container: {}}, ...pargs){
                    return provider.bind(this)({
                        ...resolve({container, dependencies}),
                        ...kwargs
                    }, ...pargs)
                }.bind(this)
            }
        }
    })
}
