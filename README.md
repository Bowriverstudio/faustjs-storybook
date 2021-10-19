# Faustjs-storybook Example

## Storybook

Run `npm run storybook`

Hero Component is working. I did not check styles.

### Problem

See Component `faustjs-storybook/src/components/tests/HeaderWrapper.tsx`
and uncomment

```jsx
{
  /* <HeadlessProvider client={client} pageProps={null}>
        <Header />
      </HeadlessProvider> */
}
```

````
Cannot read properties of null (reading '__CLIENT_CACHE_PROP')
TypeError: Cannot read properties of null (reading '__CLIENT_CACHE_PROP')
    at HeadlessProvider (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:147934:36)
    at renderWithHooks (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:116215:18)
    at mountIndeterminateComponent (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:119041:13)
    at beginWork (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:120279:16)
    at HTMLUnknownElement.callCallback (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:105175:14)
    at Object.invokeGuardedCallbackDev (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:105224:16)
    at invokeGuardedCallback (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:105286:31)
    at beginWork$1 (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:125189:7)
    at performUnitOfWork (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:124001:12)
    at workLoopSync (http://localhost:6007/vendors-node_modules_storybook_addon-actions_dist_esm_preset_addArgs_js-generated-other-entry-dc0f16.iframe.bundle.js:123932:5)
    ```
````
