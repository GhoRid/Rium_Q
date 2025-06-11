import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
// RNKakaoLogins는 Bridging-Header에 import 되었다고 가정

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  var reactNativeDelegate: ReactNativeDelegate?
  var reactNativeFactory: RCTReactNativeFactory?

  // 1) 앱 런칭 시 React Native 시작
  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {
    let delegate = ReactNativeDelegate()
    let factory = RCTReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    // ── 여기서 .mm 에서 하던 추가 설정(Flipper, Push, Deep Link 등)을 붙여넣으세요 ──

    reactNativeDelegate = delegate
    reactNativeFactory = factory

    window = UIWindow(frame: UIScreen.main.bounds)
    factory.startReactNative(
      withModuleName: "RiumQ",
      in: window,
      launchOptions: launchOptions
    )

    return true
  }

  // 2) 카카오 로그인 URL 처리
  func application(
    _ app: UIApplication,
    open url: URL,
    options: [UIApplication.OpenURLOptionsKey: Any] = [:]
  ) -> Bool {
    if RNKakaoLogins.isKakaoTalkLoginUrl(url) {
      return RNKakaoLogins.handleOpen(url)
    }
    return false
  }
}

@objcMembers
class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
  // 디버그/릴리즈 JS 번들 URL 반환
  override func bundleURL() -> URL? {
    #if DEBUG
      return RCTBundleURLProvider.sharedSettings()
               .jsBundleURL(forBundleRoot: "index", fallbackExtension: nil)
    #else
      return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }

  // RCTBridgeDelegate 용 메서드
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    return bundleURL()
  }
}
