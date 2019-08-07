A new lightweight GUI Wallet for AEON community users

---

Meet AeonLW, the new Electron based Aeon Wallet. This wallet is a new lightweight wallet for Aeon users. It adds to the usability of Aeon to anyone who choses to use the currency.

- Wallet switch option.
You can keep several Aeon wallets on one PC, and quickly switch between them without the need for closing and re-opening the wallet application.

-Mixed daemon and wallet sync. logic
We took best from both ways of sync: remote (speed) and local (reliability). At wallet startup, you connect to a remote node allowing a faster yet still secure sync. At the same time of this sync, you downloading the blockchain files on your hard drive in the background. It will add more reliability to wallet operation. If remote connection fails, you will have a local node running. You can also choose to run the wallet as a normal full node with the blockchain stored locally on your PC or lite remote node only option.

- Advanced user settings
You can rely on predefined optimum settings, or you can edit settings of the wallet:
  - Wallet Syncronization Switch (mixed/local/remote nodes)
  - Lmdb storage path (define your blockchain storage location)
  - Various ports for wallet and daemon usage (daemon, p2p, aeond, remote etc)
  - Remote node URL (define what remote nodes you connect to)
  - Bandwidth utilization for full node usage (upload/download speed)

-  Address book
Adding recipients into your address book will allow you keep track of who you have sent funds to - you can add recipients of your payments before or after transactions have been processed.

- Transaction history tab
A scrollable field where you can check your prior transactions quickly and securely.

- Non English seed restore
Restore your wallet with non-English characters (Russian, German, Chinese and other languages)

- Import wallet from old versions of Aeon
Use legacy or current wallet seed & key to restore wallets. You can also restore from key files with the correct password.

---

### Building from source

```
npm install -g quasar-cli
git clone https://github.com/aeonix/aeon
cd aeon
cp /path/to/aeon/binaries/aeond /path/to/AeonLW/bin/
cp /path/to/aeon/binaries/aeon-wallet-rpc /path/to/AeonLW/bin/
cd /path/to/AeonLW
npm install
quasar build -m electron -t mat
```
To build on all operating systems run:

```
npm run build-all
```

---

### LICENSE

Copyright (c) 2018, Ryo Currency Project
Copyright (c) 2019, Aeon Currency Project

Portions of this software are available under BSD-3 license. Please see ORIGINAL-LICENSE for details

All rights reserved.

Authors and copyright holders give permission for following:

1. Redistribution and use in source and binary forms WITHOUT modification.

2. Modification of the source form for your own personal use.

As long as the following conditions are met:

3. You must not distribute modified copies of the work to third parties. This includes
   posting the work online, or hosting copies of the modified work for download.

4. Any derivative version of this work is also covered by this license, including point 8.

5. Neither the name of the copyright holders nor the names of the authors may be
   used to endorse or promote products derived from this software without specific
   prior written permission.

6. You agree that this licence is governed by and shall be construed in accordance
   with the laws of England and Wales.

7. You agree to submit all disputes arising out of or in connection with this licence
   to the exclusive jurisdiction of the Courts of England and Wales.

Authors and copyright holders agree that:

8. This licence expires and the work covered by it is released into the
   public domain on 1st of February 2019

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
# AeonLW
