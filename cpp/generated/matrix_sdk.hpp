// This file was autogenerated by some hot garbage in the
// `uniffi-bindgen-react-native` crate. Trust me, you don't want to mess with
// it!
#pragma once
#include "UniffiCallInvoker.h"
#include <ReactCommon/CallInvoker.h>
#include <iostream>
#include <jsi/jsi.h>
#include <map>
#include <memory>

namespace react = facebook::react;
namespace jsi = facebook::jsi;

class NativeMatrixSdk : public jsi::HostObject {
private:
  // For calling back into JS from Rust.
  std::shared_ptr<uniffi_runtime::UniffiCallInvoker> callInvoker;

protected:
  std::map<std::string, jsi::Value> props;
  jsi::Value cpp_uniffi_internal_fn_func_ffi__string_to_byte_length(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);
  jsi::Value cpp_uniffi_internal_fn_func_ffi__string_to_arraybuffer(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);
  jsi::Value cpp_uniffi_internal_fn_func_ffi__arraybuffer_to_string(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);
  jsi::Value cpp_uniffi_matrix_sdk_fn_clone_oidcauthorizationdata(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);
  jsi::Value cpp_uniffi_matrix_sdk_fn_free_oidcauthorizationdata(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);
  jsi::Value cpp_uniffi_matrix_sdk_fn_method_oidcauthorizationdata_login_url(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);
  jsi::Value
  cpp_uniffi_matrix_sdk_checksum_method_oidcauthorizationdata_login_url(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);
  jsi::Value cpp_ffi_matrix_sdk_uniffi_contract_version(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);
  jsi::Value
  cpp_uniffi_internal_fn_method_oidcauthorizationdata_ffi__bless_pointer(
      jsi::Runtime &rt, const jsi::Value &thisVal, const jsi::Value *args,
      size_t count);

public:
  NativeMatrixSdk(
      jsi::Runtime &rt,
      std::shared_ptr<uniffi_runtime::UniffiCallInvoker> callInvoker);
  virtual ~NativeMatrixSdk();

  /**
   * The entry point into the crate.
   *
   * React Native must call `NativeMatrixSdk.registerModule(rt, callInvoker)`
   * before using the Javascript interface.
   */
  static void registerModule(jsi::Runtime &rt,
                             std::shared_ptr<react::CallInvoker> callInvoker);

  /**
   * Some cleanup into the crate goes here.
   *
   * Current implementation is empty, however, this is not guaranteed to always
   * be the case.
   *
   * Clients should call `NativeMatrixSdk.unregisterModule(rt)` after final use
   * where possible.
   */
  static void unregisterModule(jsi::Runtime &rt);

  virtual jsi::Value get(jsi::Runtime &rt, const jsi::PropNameID &name);
  virtual void set(jsi::Runtime &rt, const jsi::PropNameID &name,
                   const jsi::Value &value);
  virtual std::vector<jsi::PropNameID> getPropertyNames(jsi::Runtime &rt);
};