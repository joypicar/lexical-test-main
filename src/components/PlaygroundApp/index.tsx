/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import LexicalComposer from '@lexical/react/LexicalComposer'
import { isDevPlayground } from './appSettings'
import { SettingsContext, useSettings } from './context/SettingsContext'
import { SharedHistoryContext } from './context/SharedHistoryContext'
import Editor from './Editor'
import PlaygroundNodes from './nodes/PlaygroundNodes'
import TestRecorderPlugin from './plugins/TestRecorderPlugin'
import TypingPerfPlugin from './plugins/TypingPerfPlugin'
import Settings from './Settings'
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme'

console.warn(
  'If you are profiling the playground app, please ensure you turn off the debug view. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting.'
)

function App(): JSX.Element {
  const { settings } = useSettings()
  const { measureTypingPerf } = settings

  const initialConfig = {
    namespace: 'PlaygroundEditor',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    theme: PlaygroundEditorTheme,
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>       
        <div className="editor-shell">
          <Editor />
        </div>
        <Settings />
        {measureTypingPerf && <TypingPerfPlugin />}
      </SharedHistoryContext>
    </LexicalComposer>
  )
}

export function PlaygroundApp(): JSX.Element {
  return (
    <SettingsContext>
      <App />      
    </SettingsContext>
  )
}
