// This file was autogenerated by some hot garbage in the `uniffi-bindgen-react-native` crate.
// Trust me, you don't want to mess with it!
import nativeModule, {
  type UniffiRustFutureContinuationCallback,
  type UniffiForeignFutureFree,
  type UniffiCallbackInterfaceFree,
  type UniffiForeignFuture,
  type UniffiForeignFutureStructU8,
  type UniffiForeignFutureCompleteU8,
  type UniffiForeignFutureStructI8,
  type UniffiForeignFutureCompleteI8,
  type UniffiForeignFutureStructU16,
  type UniffiForeignFutureCompleteU16,
  type UniffiForeignFutureStructI16,
  type UniffiForeignFutureCompleteI16,
  type UniffiForeignFutureStructU32,
  type UniffiForeignFutureCompleteU32,
  type UniffiForeignFutureStructI32,
  type UniffiForeignFutureCompleteI32,
  type UniffiForeignFutureStructU64,
  type UniffiForeignFutureCompleteU64,
  type UniffiForeignFutureStructI64,
  type UniffiForeignFutureCompleteI64,
  type UniffiForeignFutureStructF32,
  type UniffiForeignFutureCompleteF32,
  type UniffiForeignFutureStructF64,
  type UniffiForeignFutureCompleteF64,
  type UniffiForeignFutureStructPointer,
  type UniffiForeignFutureCompletePointer,
  type UniffiForeignFutureStructRustBuffer,
  type UniffiForeignFutureCompleteRustBuffer,
  type UniffiForeignFutureStructVoid,
  type UniffiForeignFutureCompleteVoid,
} from './matrix_sdk_crypto-ffi';
import {
  type FfiConverter,
  AbstractFfiConverterArrayBuffer,
  FfiConverterBool,
  FfiConverterInt32,
  RustBuffer,
  UniffiEnum,
  UniffiError,
  UniffiInternalError,
  rustCall,
  uniffiCreateRecord,
  uniffiTypeNameSymbol,
  variantOrdinalSymbol,
} from 'uniffi-bindgen-react-native';

// Get converters from the other files, if any.

const uniffiIsDebug = process.env.uniffiIsDebug !== 'production' || false;
// Public interface members begin here.

/**
 * Settings for decrypting messages
 */
export type DecryptionSettings = {
  /**
   * The trust level in the sender's device that is required to decrypt the
   * event. If the sender's device is not sufficiently trusted,
   * [`MegolmError::SenderIdentityNotTrusted`] will be returned.
   */
  senderDeviceTrustRequirement: TrustRequirement;
};

/**
 * Generated factory for {@link DecryptionSettings} record objects.
 */
export const DecryptionSettings = (() => {
  const defaults = () => ({});
  const create = (() => {
    return uniffiCreateRecord<DecryptionSettings, ReturnType<typeof defaults>>(
      defaults
    );
  })();
  return Object.freeze({
    /**
     * Create a frozen instance of {@link DecryptionSettings}, with defaults specified
     * in Rust, in the {@link matrix_sdk_crypto} crate.
     */
    create,

    /**
     * Create a frozen instance of {@link DecryptionSettings}, with defaults specified
     * in Rust, in the {@link matrix_sdk_crypto} crate.
     */
    new: create,

    /**
     * Defaults specified in the {@link matrix_sdk_crypto} crate.
     */
    defaults: () => Object.freeze(defaults()) as Partial<DecryptionSettings>,
  });
})();

const FfiConverterTypeDecryptionSettings = (() => {
  type TypeName = DecryptionSettings;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      return {
        senderDeviceTrustRequirement:
          FfiConverterTypeTrustRequirement.read(from),
      };
    }
    write(value: TypeName, into: RustBuffer): void {
      FfiConverterTypeTrustRequirement.write(
        value.senderDeviceTrustRequirement,
        into
      );
    }
    allocationSize(value: TypeName): number {
      return FfiConverterTypeTrustRequirement.allocationSize(
        value.senderDeviceTrustRequirement
      );
    }
  }
  return new FFIConverter();
})();

const stringToArrayBuffer = (s: string): ArrayBuffer =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__string_to_arraybuffer(s, status)
  );

const arrayBufferToString = (ab: ArrayBuffer): string =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__arraybuffer_to_string(
      ab,
      status
    )
  );

const stringByteLength = (s: string): number =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__string_to_byte_length(s, status)
  );

const FfiConverterString = (() => {
  const lengthConverter = FfiConverterInt32;
  type TypeName = string;
  class FFIConverter implements FfiConverter<ArrayBuffer, TypeName> {
    lift(value: ArrayBuffer): TypeName {
      return arrayBufferToString(value);
    }
    lower(value: TypeName): ArrayBuffer {
      return stringToArrayBuffer(value);
    }
    read(from: RustBuffer): TypeName {
      const length = lengthConverter.read(from);
      const bytes = from.readBytes(length);
      return arrayBufferToString(bytes);
    }
    write(value: TypeName, into: RustBuffer): void {
      const buffer = stringToArrayBuffer(value);
      const numBytes = buffer.byteLength;
      lengthConverter.write(numBytes, into);
      into.writeBytes(buffer);
    }
    allocationSize(value: TypeName): number {
      return lengthConverter.allocationSize(0) + stringByteLength(value);
    }
  }

  return new FFIConverter();
})();

// Enum: CollectStrategy
export enum CollectStrategy_Tags {
  DeviceBasedStrategy = 'DeviceBasedStrategy',
  IdentityBasedStrategy = 'IdentityBasedStrategy',
}
/**
 * Strategy to collect the devices that should receive room keys for the
 * current discussion.
 */
export const CollectStrategy = (() => {
  type DeviceBasedStrategy__interface = {
    tag: CollectStrategy_Tags.DeviceBasedStrategy;
    inner: Readonly<{
      onlyAllowTrustedDevices: boolean;
      errorOnVerifiedUserProblem: boolean;
    }>;
  };

  /**
   * Device based sharing strategy.
   */
  class DeviceBasedStrategy_
    extends UniffiEnum
    implements DeviceBasedStrategy__interface
  {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'CollectStrategy';
    readonly tag = CollectStrategy_Tags.DeviceBasedStrategy;
    readonly inner: Readonly<{
      onlyAllowTrustedDevices: boolean;
      errorOnVerifiedUserProblem: boolean;
    }>;
    constructor(inner: {
      /**
       * If `true`, devices that are not trusted will be excluded from the
       * conversation. A device is trusted if any of the following is true:
       * - It was manually marked as trusted.
       * - It was marked as verified via interactive verification.
       * - It is signed by its owner identity, and this identity has been
       * trusted via interactive verification.
       * - It is the current own device of the user.
       */ onlyAllowTrustedDevices: boolean;
      /**
       * If `true`, and a verified user has an unsigned device, key sharing
       * will fail with a
       * [`SessionRecipientCollectionError::VerifiedUserHasUnsignedDevice`].
       *
       * If `true`, and a verified user has replaced their identity, key
       * sharing will fail with a
       * [`SessionRecipientCollectionError::VerifiedUserChangedIdentity`].
       *
       * Otherwise, keys are shared with unsigned devices as normal.
       *
       * Once the problematic devices are blacklisted or whitelisted the
       * caller can retry to share a second time.
       */ errorOnVerifiedUserProblem: boolean;
    }) {
      super('CollectStrategy', 'DeviceBasedStrategy');
      this.inner = Object.freeze(inner);
    }

    static new(inner: {
      /**
       * If `true`, devices that are not trusted will be excluded from the
       * conversation. A device is trusted if any of the following is true:
       * - It was manually marked as trusted.
       * - It was marked as verified via interactive verification.
       * - It is signed by its owner identity, and this identity has been
       * trusted via interactive verification.
       * - It is the current own device of the user.
       */ onlyAllowTrustedDevices: boolean;
      /**
       * If `true`, and a verified user has an unsigned device, key sharing
       * will fail with a
       * [`SessionRecipientCollectionError::VerifiedUserHasUnsignedDevice`].
       *
       * If `true`, and a verified user has replaced their identity, key
       * sharing will fail with a
       * [`SessionRecipientCollectionError::VerifiedUserChangedIdentity`].
       *
       * Otherwise, keys are shared with unsigned devices as normal.
       *
       * Once the problematic devices are blacklisted or whitelisted the
       * caller can retry to share a second time.
       */ errorOnVerifiedUserProblem: boolean;
    }): DeviceBasedStrategy_ {
      return new DeviceBasedStrategy_(inner);
    }

    static instanceOf(obj: any): obj is DeviceBasedStrategy_ {
      return obj.tag === CollectStrategy_Tags.DeviceBasedStrategy;
    }
  }

  type IdentityBasedStrategy__interface = {
    tag: CollectStrategy_Tags.IdentityBasedStrategy;
  };

  /**
   * Share based on identity. Only distribute to devices signed by their
   * owner. If a user has no published identity he will not receive
   * any room keys.
   */
  class IdentityBasedStrategy_
    extends UniffiEnum
    implements IdentityBasedStrategy__interface
  {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'CollectStrategy';
    readonly tag = CollectStrategy_Tags.IdentityBasedStrategy;
    constructor() {
      super('CollectStrategy', 'IdentityBasedStrategy');
    }

    static new(): IdentityBasedStrategy_ {
      return new IdentityBasedStrategy_();
    }

    static instanceOf(obj: any): obj is IdentityBasedStrategy_ {
      return obj.tag === CollectStrategy_Tags.IdentityBasedStrategy;
    }
  }

  function instanceOf(obj: any): obj is CollectStrategy {
    return obj[uniffiTypeNameSymbol] === 'CollectStrategy';
  }

  return Object.freeze({
    instanceOf,
    DeviceBasedStrategy: DeviceBasedStrategy_,
    IdentityBasedStrategy: IdentityBasedStrategy_,
  });
})();

/**
 * Strategy to collect the devices that should receive room keys for the
 * current discussion.
 */

export type CollectStrategy = InstanceType<
  (typeof CollectStrategy)[keyof Omit<typeof CollectStrategy, 'instanceOf'>]
>;

// FfiConverter for enum CollectStrategy
const FfiConverterTypeCollectStrategy = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = CollectStrategy;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return new CollectStrategy.DeviceBasedStrategy({
            onlyAllowTrustedDevices: FfiConverterBool.read(from),
            errorOnVerifiedUserProblem: FfiConverterBool.read(from),
          });
        case 2:
          return new CollectStrategy.IdentityBasedStrategy();
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value.tag) {
        case CollectStrategy_Tags.DeviceBasedStrategy: {
          ordinalConverter.write(1, into);
          const inner = value.inner;
          FfiConverterBool.write(inner.onlyAllowTrustedDevices, into);
          FfiConverterBool.write(inner.errorOnVerifiedUserProblem, into);
          return;
        }
        case CollectStrategy_Tags.IdentityBasedStrategy: {
          ordinalConverter.write(2, into);
          return;
        }
        default:
          // Throwing from here means that CollectStrategy_Tags hasn't matched an ordinal.
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    allocationSize(value: TypeName): number {
      switch (value.tag) {
        case CollectStrategy_Tags.DeviceBasedStrategy: {
          const inner = value.inner;
          let size = ordinalConverter.allocationSize(1);
          size += FfiConverterBool.allocationSize(
            inner.onlyAllowTrustedDevices
          );
          size += FfiConverterBool.allocationSize(
            inner.errorOnVerifiedUserProblem
          );
          return size;
        }
        case CollectStrategy_Tags.IdentityBasedStrategy: {
          return ordinalConverter.allocationSize(2);
        }
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
  }
  return new FFIConverter();
})();

/**
 * The local trust state of a device.
 */
export enum LocalTrust {
  /**
   * The device has been verified and is trusted.
   */
  Verified,
  /**
   * The device been blacklisted from communicating.
   */
  BlackListed,
  /**
   * The trust state of the device is being ignored.
   */
  Ignored,
  /**
   * The trust state is unset.
   */
  Unset,
}

const FfiConverterTypeLocalTrust = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = LocalTrust;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return LocalTrust.Verified;
        case 2:
          return LocalTrust.BlackListed;
        case 3:
          return LocalTrust.Ignored;
        case 4:
          return LocalTrust.Unset;
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value) {
        case LocalTrust.Verified:
          return ordinalConverter.write(1, into);
        case LocalTrust.BlackListed:
          return ordinalConverter.write(2, into);
        case LocalTrust.Ignored:
          return ordinalConverter.write(3, into);
        case LocalTrust.Unset:
          return ordinalConverter.write(4, into);
      }
    }
    allocationSize(value: TypeName): number {
      return ordinalConverter.allocationSize(0);
    }
  }
  return new FFIConverter();
})();

// Flat error type: LoginQrCodeDecodeError
/**
 * Error type for the decoding of the [`QrCodeData`].
 */
export const LoginQrCodeDecodeError = (() => {
  /**
   * The QR code data is no long enough, it's missing some fields.
   */
  class NotEnoughData extends UniffiError {
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [uniffiTypeNameSymbol]: string = 'LoginQrCodeDecodeError';
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [variantOrdinalSymbol] = 1;
    constructor(message: string) {
      super('LoginQrCodeDecodeError', 'NotEnoughData', message);
    }

    static instanceOf(e: any): e is NotEnoughData {
      return instanceOf(e) && (e as any)[variantOrdinalSymbol] === 1;
    }
  }
  /**
   * One of the URLs in the QR code data is not a valid UTF-8 encoded string.
   */
  class NotUtf8 extends UniffiError {
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [uniffiTypeNameSymbol]: string = 'LoginQrCodeDecodeError';
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [variantOrdinalSymbol] = 2;
    constructor(message: string) {
      super('LoginQrCodeDecodeError', 'NotUtf8', message);
    }

    static instanceOf(e: any): e is NotUtf8 {
      return instanceOf(e) && (e as any)[variantOrdinalSymbol] === 2;
    }
  }
  /**
   * One of the URLs in the QR code data could not be parsed.
   */
  class UrlParse extends UniffiError {
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [uniffiTypeNameSymbol]: string = 'LoginQrCodeDecodeError';
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [variantOrdinalSymbol] = 3;
    constructor(message: string) {
      super('LoginQrCodeDecodeError', 'UrlParse', message);
    }

    static instanceOf(e: any): e is UrlParse {
      return instanceOf(e) && (e as any)[variantOrdinalSymbol] === 3;
    }
  }
  /**
   * The QR code data contains an invalid mode, we expect the login (0x03)
   * mode or the reciprocate mode (0x04).
   */
  class InvalidMode extends UniffiError {
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [uniffiTypeNameSymbol]: string = 'LoginQrCodeDecodeError';
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [variantOrdinalSymbol] = 4;
    constructor(message: string) {
      super('LoginQrCodeDecodeError', 'InvalidMode', message);
    }

    static instanceOf(e: any): e is InvalidMode {
      return instanceOf(e) && (e as any)[variantOrdinalSymbol] === 4;
    }
  }
  /**
   * The QR code data contains an unsupported version.
   */
  class InvalidVersion extends UniffiError {
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [uniffiTypeNameSymbol]: string = 'LoginQrCodeDecodeError';
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [variantOrdinalSymbol] = 5;
    constructor(message: string) {
      super('LoginQrCodeDecodeError', 'InvalidVersion', message);
    }

    static instanceOf(e: any): e is InvalidVersion {
      return instanceOf(e) && (e as any)[variantOrdinalSymbol] === 5;
    }
  }
  /**
   * The base64 encoded variant of the QR code data is not a valid base64
   * string.
   */
  class Base64 extends UniffiError {
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [uniffiTypeNameSymbol]: string = 'LoginQrCodeDecodeError';
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [variantOrdinalSymbol] = 6;
    constructor(message: string) {
      super('LoginQrCodeDecodeError', 'Base64', message);
    }

    static instanceOf(e: any): e is Base64 {
      return instanceOf(e) && (e as any)[variantOrdinalSymbol] === 6;
    }
  }
  /**
   * The QR code data doesn't contain the expected `MATRIX` prefix.
   */
  class InvalidPrefix extends UniffiError {
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [uniffiTypeNameSymbol]: string = 'LoginQrCodeDecodeError';
    /**
     * @private
     * This field is private and should not be used.
     */
    readonly [variantOrdinalSymbol] = 7;
    constructor(message: string) {
      super('LoginQrCodeDecodeError', 'InvalidPrefix', message);
    }

    static instanceOf(e: any): e is InvalidPrefix {
      return instanceOf(e) && (e as any)[variantOrdinalSymbol] === 7;
    }
  }

  // Utility function which does not rely on instanceof.
  function instanceOf(
    e: any
  ): e is
    | NotEnoughData
    | NotUtf8
    | UrlParse
    | InvalidMode
    | InvalidVersion
    | Base64
    | InvalidPrefix {
    return (e as any)[uniffiTypeNameSymbol] === 'LoginQrCodeDecodeError';
  }
  return {
    NotEnoughData,
    NotUtf8,
    UrlParse,
    InvalidMode,
    InvalidVersion,
    Base64,
    InvalidPrefix,
    instanceOf,
  };
})();

// Union type for LoginQrCodeDecodeError error type.

/**
 * Error type for the decoding of the [`QrCodeData`].
 */

export type LoginQrCodeDecodeError = InstanceType<
  (typeof LoginQrCodeDecodeError)[keyof Omit<
    typeof LoginQrCodeDecodeError,
    'instanceOf'
  >]
>;

const FfiConverterTypeLoginQrCodeDecodeError = (() => {
  const intConverter = FfiConverterInt32;
  type TypeName = LoginQrCodeDecodeError;
  class FfiConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (intConverter.read(from)) {
        case 1:
          return new LoginQrCodeDecodeError.NotEnoughData(
            FfiConverterString.read(from)
          );

        case 2:
          return new LoginQrCodeDecodeError.NotUtf8(
            FfiConverterString.read(from)
          );

        case 3:
          return new LoginQrCodeDecodeError.UrlParse(
            FfiConverterString.read(from)
          );

        case 4:
          return new LoginQrCodeDecodeError.InvalidMode(
            FfiConverterString.read(from)
          );

        case 5:
          return new LoginQrCodeDecodeError.InvalidVersion(
            FfiConverterString.read(from)
          );

        case 6:
          return new LoginQrCodeDecodeError.Base64(
            FfiConverterString.read(from)
          );

        case 7:
          return new LoginQrCodeDecodeError.InvalidPrefix(
            FfiConverterString.read(from)
          );

        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      const obj = value as any;
      const index = obj[variantOrdinalSymbol] as number;
      intConverter.write(index, into);
    }
    allocationSize(value: TypeName): number {
      return intConverter.allocationSize(0);
    }
  }
  return new FfiConverter();
})();

/**
 * The result of a signature check.
 */
export enum SignatureState {
  /**
   * The signature is missing.
   */
  Missing,
  /**
   * The signature is invalid.
   */
  Invalid,
  /**
   * The signature is valid but the device or user identity that created the
   * signature is not trusted.
   */
  ValidButNotTrusted,
  /**
   * The signature is valid and the device or user identity that created the
   * signature is trusted.
   */
  ValidAndTrusted,
}

const FfiConverterTypeSignatureState = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = SignatureState;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return SignatureState.Missing;
        case 2:
          return SignatureState.Invalid;
        case 3:
          return SignatureState.ValidButNotTrusted;
        case 4:
          return SignatureState.ValidAndTrusted;
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value) {
        case SignatureState.Missing:
          return ordinalConverter.write(1, into);
        case SignatureState.Invalid:
          return ordinalConverter.write(2, into);
        case SignatureState.ValidButNotTrusted:
          return ordinalConverter.write(3, into);
        case SignatureState.ValidAndTrusted:
          return ordinalConverter.write(4, into);
      }
    }
    allocationSize(value: TypeName): number {
      return ordinalConverter.allocationSize(0);
    }
  }
  return new FFIConverter();
})();

/**
 * The trust level in the sender's device that is required to decrypt an
 * event.
 */
export enum TrustRequirement {
  /**
   * Decrypt events from everyone regardless of trust.
   */
  Untrusted,
  /**
   * Only decrypt events from cross-signed devices or legacy sessions (Megolm
   * sessions created before we started collecting trust information).
   */
  CrossSignedOrLegacy,
  /**
   * Only decrypt events from cross-signed devices.
   */
  CrossSigned,
}

const FfiConverterTypeTrustRequirement = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = TrustRequirement;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return TrustRequirement.Untrusted;
        case 2:
          return TrustRequirement.CrossSignedOrLegacy;
        case 3:
          return TrustRequirement.CrossSigned;
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value) {
        case TrustRequirement.Untrusted:
          return ordinalConverter.write(1, into);
        case TrustRequirement.CrossSignedOrLegacy:
          return ordinalConverter.write(2, into);
        case TrustRequirement.CrossSigned:
          return ordinalConverter.write(3, into);
      }
    }
    allocationSize(value: TypeName): number {
      return ordinalConverter.allocationSize(0);
    }
  }
  return new FFIConverter();
})();

/**
 * Our best guess at the reason why an event can't be decrypted.
 */
export enum UtdCause {
  /**
   * We don't have an explanation for why this UTD happened - it is probably
   * a bug, or a network split between the two homeservers.
   */
  Unknown,
  /**
   * This event was sent when we were not a member of the room (or invited),
   * so it is impossible to decrypt (without MSC3061).
   */
  Membership,
}

const FfiConverterTypeUtdCause = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = UtdCause;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return UtdCause.Unknown;
        case 2:
          return UtdCause.Membership;
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value) {
        case UtdCause.Unknown:
          return ordinalConverter.write(1, into);
        case UtdCause.Membership:
          return ordinalConverter.write(2, into);
      }
    }
    allocationSize(value: TypeName): number {
      return ordinalConverter.allocationSize(0);
    }
  }
  return new FFIConverter();
})();

/**
 * This should be called before anything else.
 *
 * It is likely that this is being done for you by the library's `index.ts`.
 *
 * It checks versions of uniffi between when the Rust scaffolding was generated
 * and when the bindings were generated.
 *
 * It also initializes the machinery to enable Rust to talk back to Javascript.
 */
function uniffiEnsureInitialized() {
  // Get the bindings contract version from our ComponentInterface
  const bindingsContractVersion = 26;
  // Get the scaffolding contract version by calling the into the dylib
  const scaffoldingContractVersion =
    nativeModule().ffi_matrix_sdk_crypto_uniffi_contract_version();
  if (bindingsContractVersion !== scaffoldingContractVersion) {
    throw new UniffiInternalError.ContractVersionMismatch(
      scaffoldingContractVersion,
      bindingsContractVersion
    );
  }
}

export default Object.freeze({
  initialize: uniffiEnsureInitialized,
  converters: {
    FfiConverterTypeCollectStrategy,
    FfiConverterTypeDecryptionSettings,
    FfiConverterTypeLocalTrust,
    FfiConverterTypeSignatureState,
    FfiConverterTypeTrustRequirement,
    FfiConverterTypeUtdCause,
  },
});
