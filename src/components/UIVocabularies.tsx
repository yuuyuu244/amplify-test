import { I18n } from 'aws-amplify';

export const SetUIVocabularies = (lng: string): void => {
    I18n.setLanguage(lng);
    I18n.putVocabulariesForLanguage('ja', {
        'Sign In Account' : 'アカウントにサインイン',
        'Forget your password? ' : 'パスワードを忘れた場合',
        //--- cognitoのサーバーからのメッセージ
        // Cognito Server Side Error Messages
        // ref.) https://github.com/aws-amplify/amplify-js/issues/867
        //---
        'User does not exist.': 'ユーザーが存在しません',
        'Incorrect username or password.': 'ユーザー名またはパスワードが違います',
        'User is not confirmed.': 'ユーザーは検証されていません',
        'Invalid verification code provided, please try again.': '指定された確認コードが無効です。もう一度お試しください',
        'Attempt limit exceeded, please try after some time.': '試行制限を超過しました。しばらくしてからもう一度お試しください',
        'Username/client id combination not found.': 'ユーザーが存在しません',
        'CUSTOM_AUTH is not enabled for the client.': 'パスワードは必須です', // 本来の意味とは異なるが、パスワード未入力時に発生するのでこの訳としている
        'Password does not conform to policy: Password not long enough': 'パスワードは8文字以上を入力してください (8文字以上の大文字小文字を含む英数字)', // 適宜修正
        'Password does not conform to policy: Password must have uppercase characters': 'パスワードには大文字を含めてください (8文字以上の大文字小文字を含む英数字)', // 適宜修正
        'Password does not conform to policy: Password must have lowercase characters': 'パスワードには小文字を含めてください (8文字以上の大文字小文字を含む英数字)', // 適宜修正
        'Password does not conform to policy: Password must have numeric characters': 'パスワードには数字を含めてください (8文字以上の大文字小文字を含む英数字)', // 適宜修正
        "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6": 'パスワードは8文字以上、大文字小文字を含む英数字を指定してください', // 適宜修正。本来の意味とは異なるがこれで明示している。
        "2 validation errors detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6; Value at 'password' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[\S]+.*[\S]+$": 'パスワードは8文字以上、大文字小文字を含む英数字を指定してください', // 適宜修正。本来の意味とは異なるがこれで明示している。
        'Temporary password has expired and must be reset by an administrator.': '一時パスワードは無効です。管理者によるリセットが必要です',
        "1 validation error detected: Value null at 'attributeName' failed to satisfy constraint: Member must not be null": '入力チェックエラー、必須項目がNULLです', //アカウント復旧でのメールアドレスのラジオをチェックONにせず、送信した場合
        'Invalid code received for user': '無効なコードです', // TOTPでのトークンに誤りがある
        'Invalid session for the user, session is expired.' : '無効なセッション、セッションは有効期限切れです。ログインからやり直してください', // ログインセッション無効です、ログインからやり直し
      // -------------------------------------------------
      // @ref 
      // Additional translations provided https://github.com/aws-amplify/amplify-ui/blob/main/packages/ui/src/i18n/dictionaries/authenticator/ja.tsby customers
      'Account recovery requires verified contact information':
        'アカウントの復旧には確認済みの連絡先が必要です',
      'Back to Sign In': 'サインインに戻る',
      'Change Password': 'パスワードを変える ',
      Changing: '変更中',
      Code: 'コード',
      'Confirm Password': 'パスワードの確認',
      'Confirm Sign Up': '登録する',
      'Confirm SMS Code': 'SMS コードを確認',
      'Confirm TOTP Code': 'TOTP コードを確認',
      Confirm: '確定',
      'Confirmation Code': '確認コード',
      Confirming: '確認中',
      'Create a new account': '新しいアカウントを作る',
      'Create Account': 'アカウントを作る',
      'Creating Account': 'アカウントの作成中',
      'Dismiss alert': 'アラートを閉じる',
      Email: 'メールアドレス',
      'Enter your code': 'コードを入力',
      'Enter your email': 'メールアドレスを入力',
      'Enter your phone number': '電話番号を入力',
      'Enter your Username': 'ユーザー名を入力 ',
      'Forgot your password?': 'パスワードを忘れましたか？ ',
      'Hide password': 'パスワードを非表示',
      'It may take a minute to arrive': '到着するまでに 1 分かかることがあります。',
      Loading: 'ロード中',
      'New password': '新しいパスワード',
      or: '又は',
      Password: 'パスワード ',
      'Phone Number': '電話番号',
      'Resend Code': 'コードを再送信',
      'Reset your Password': 'パスワードをリセット',
      'Reset your password': 'パスワードをリセットする',
      'Send code': 'コードを送信',
      'Send Code': 'コードを送信',
      Sending: '送信中',
      'Setup TOTP': 'TOTP をセットアップ',
      'Show password': 'パスワードを表示',
      'Sign in to your account': 'アカウントにサインイン ',
      'Sign In with Amazon': 'Amazonでサインイン',
      'Sign In with Apple': 'Apple でサインイン',
      'Sign In with Facebook': 'Facebookでサインイン',
      'Sign In with Google': 'Googleでサインイン',
      'Sign In': 'サインイン ',
      'Sign in': 'サインイン',
      'Signing in': 'サインイン中',
      Skip: 'スキップ',
      Submit: '送信',
      Submitting: '送信中',
      Username: 'ユーザー名 ',
      'Verify Contact': '連絡先を確認',
      Verify: '確認',
      'We Sent A Code': 'コードが送信されました',
      'We Texted You': 'テキストが送信されました',
      'Your code is on the way. To log in, enter the code we sent you':
        'コードが途中です。ログインするには、送信したコードを入力してください。',
    
      'An account with the given email already exists.':
        '入力されたメールアドレスのアカウントが既に存在します',
      'Confirm a Code': 'コードを確認',
      'Confirm Sign In': 'サインインする',
      'Create account': 'アカウントを作る ',
      'Enter your Email': 'メールアドレスを入力',
      'Enter your password': 'パスワードを入力 ',
      'Enter your Password': 'パスワードを入力',
      'Please confirm your Password': 'パスワードを入力',
      'Forgot Password': 'パスワードを忘れた ',
      'Have an account? ': 'アカウントを持っていますか？',
      'Incorrect username or password': 'ユーザー名かパスワードが異なります ',
      'Invalid password format': 'パスワードの形式が無効です ',
      'Invalid phone number format':
        '不正な電話番号の形式です。\n+12345678900 の形式で入力してください',
      'It may take a minute to arrive.':
        'コードを受信するまで数分かかる場合があります。',
      'Lost your code? ': 'コードを失くしましたか？',
      'New Password': '新しいパスワード',
      'No account? ': 'アカウントが無いとき ',
      'Password attempts exceeded': 'サインインの試行回数が上限に達しました',
      'Reset password': 'パスワードをリセット ',
      'Reset Password': 'パスワードをリセット',
      'Sign Out': 'サインアウト ',
      'Sign Up': '登録 ',
      'User already exists': '既にユーザーが存在しています ',
      'User does not exist': 'ユーザーが存在しません ',
      'Username cannot be empty': 'ユーザー名は入力必須です',
      'We Emailed You': 'コードを送信しました',
      'Your code is on the way. To log in, enter the code we emailed to':
        'ログインするには、メールに記載されたコードを入力してください。送信先:',
      'Your code is on the way. To log in, enter the code we texted to':
        'ログインするには、テキストメッセージに記載されたコードを入力してください。送信先:',
    });
};
