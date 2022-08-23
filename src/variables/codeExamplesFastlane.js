const CodeExamplesFastlane = {
  installFastlane: `brew install fastlane`,
  bundleInstall: `sudo bundle install`,
  fastlaneInit: `fastlane init`,
  createGemfile: `touch Gemfile && code Gemfile`,
  gemfileContent: `
  source "https://rubygems.org"
  gem "fastlane"
  `,
  installRbenvUsingBrew: `brew update && brew install rbenv`,
  contentNeededInEnvVariables: `
  eval "$(rbenv init -)"

  source /opt/homebrew/opt/chruby/share/chruby/auto.sh
  source /opt/homebrew/opt/chruby/share/chruby/chruby.sh`,
  installingAndControlingRubyWithRbenv: `
  # Lista todas as versões disponíveis para a instalação:
  rbenv install -l

  # Instala uma versão específica:
  rbenv install 2.7.6

  # Define uma versão específica do ruby como versão global:
  rbenv global 2.7.6

  # instala shims para todos os executáveis Ruby (irb, gem,rake, 
  rbenv rehash
  `,
  checkIfRubyWasInstalledSuccessfuly: `
  # Mostra o PATH de instalação do ruby
  which ruby

  # Mostra a atual versão do ruby
  ruby -v

  # Mostra diversas informações sobre o ruby:
  gem env
  `,
  installBundler: `
  gem install bundler
  `,
  androidLanes: `
  default_platform(:android)

  platform :android do
  
  # ===============================================================================
  desc "Deploy a new version to the Google Play to beta track"
  lane :deployBeta do
    gradle(task: 'clean', project_dir: '../android/')
    gradle(task: 'bundle', build_type: 'Release')
    supply(track: 'beta')
  end

  # ===============================================================================
  desc "Deploy a new version to the Google Play to production track"
  lane :deployProduction do
    gradle(task: 'clean', project_dir: '../android/')
    gradle(task: 'bundle', build_type: 'Release')
    supply(track: 'production')
  end

  # ===============================================================================
  # Usados para incrementar automaticamente as versões da parte nativa do android 
  # de acordo com a versão disponível no arquivo package.json.
  desc 'Android: Increment versionCode and set versionName to package.json version.'
  package = load_json(json_path: "../package.json")

  lane :bump do
    increment_version_code(
      gradle_file_path: "./app/build.gradle",
    )

    increment_version_name(
      gradle_file_path: "./app/build.gradle",
      version_name: package['version']
    )
  end
end
  `,
  iosLanes: `
  default_platform(:ios)

  before_all do
    update_fastlane
  end

  platform :ios do
    desc "Push a new beta build to TestFlight"
    lane :beta do
      # setup_ci
      increment_build_number(xcodeproj: "com.appmotoristalite.evolog.xcodeproj")
      get_certificates( # Create or get certificate, and install it
        output_path: "./builds", # Download certificate in the build folder (you don't need to create the folder)
        username: CredentialsManager::AppfileConfig.try_fetch_value(:apple_id),
        team_id: CredentialsManager::AppfileConfig.try_fetch_value(:team_id),
        filename: CredentialsManager::AppfileConfig.try_fetch_value(:team_id)
      )
      get_provisioning_profile( # Create or get provisioning profile
        app_identifier: CredentialsManager::AppfileConfig.try_fetch_value(:app_identifier),
        output_path: "./builds",  # Download provisioning profile in the build folder
        filename: "AppStore_com.appmotoristalite.evolog.mobileprovision", # Rename the local provisioning profile
        username: CredentialsManager::AppfileConfig.try_fetch_value(:apple_id),
        team_id: CredentialsManager::AppfileConfig.try_fetch_value(:team_id),
        cert_id: CredentialsManager::AppfileConfig.try_fetch_value(:team_id)
      )
      update_project_provisioning( # Set the project provisioning profile (related in Xcode to the General > Signing Release section)
        xcodeproj: "com.appmotoristalite.evolog.xcodeproj",
        target_filter: "com.appmotoristalite.evolog", # Name of your project
        profile: "./builds/AppStore_com.appmotoristalite.evolog.mobileprovision",
        build_configuration: "Release"
      )
      update_project_team( # Set the right team on your project
        teamid: CredentialsManager::AppfileConfig.try_fetch_value(:team_id)
      )
      build_app(
        workspace: "com.appmotoristalite.evolog.xcworkspace",
        scheme: "com.appmotoristalite.evolog",
        clean: true,
        export_method: "app-store",
        export_options: {
        provisioningProfiles: { 
          "com.appmotoristalite.evolog" => "AppStore_com.appmotoristalite.evolog.mobileprovision",
          # "com.example.bundleid2" => "Provisioning Profile Name 2"
          }
        },
        build_path: "./builds",
        output_directory: "./builds"
      )
      upload_to_testflight(
        beta_app_review_info: {
          contact_email: ENV["contact_email"],
          contact_first_name: ENV["contact_first_name"],
          contact_last_name: ENV["contact_last_name"],
          contact_phone: ENV["contact_phone"],
          demo_account_name: ENV["demo_account_name"],
          demo_account_password: ENV["demo_account_password"],
          notes: ENV["notes"],
        },
        localized_app_info: {
          "default": {
            feedback_email: ENV["beta_app_feedback_email"],
            marketing_url: ENV["marketing_url"],
            privacy_policy_url: ENV["privacy_policy_url"],
            description: ENV["default_description_pt"],
          },
          "pt-BR": {
            feedback_email: ENV["beta_app_feedback_email"],
            marketing_url: ENV["marketing_url"],
            privacy_policy_url: ENV["privacy_policy_url"],
            description: ENV["default_description_pt"],
          },
          "en-US": {
            feedback_email: ENV["beta_app_feedback_email"],
            marketing_url: ENV["marketing_url"],
            privacy_policy_url: ENV["privacy_policy_url"],
            description: ENV["default_description_en"],
          },
          "es-ES": {
            feedback_email: ENV["beta_app_feedback_email"],
            marketing_url: ENV["marketing_url"],
            privacy_policy_url: ENV["privacy_policy_url"],
            description: ENV["default_description_es"],
          }
        },
        # ---- That will not be used by now
        # localized_build_info: {
        #   "default": {
        #     whats_new: "Default changelog",
        #   },
        #   "en-GB": {
        #     whats_new: "en-gb changelog",
        #   }
        # }
      )
    end
  end

  `,
  runningLanes: `bundle exec fastlane laneName`,
};

export { CodeExamplesFastlane };
