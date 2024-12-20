const fs = require('fs');

const data = `
Eliezer Muller I: 485833
Jordane Jaskolski: 337909
Danial Bayer DVM: 792065
Wilson Shanahan DDS: 724233
Mrs. Vicenta Nitzsche: 87131
Kelli Rice: 779413
Prof. Gay Kuphal: 576581
Nelle Volkman: 717658
Dr. Delphine Stiedemann: 291471
Cristobal Shanahan: 381476
Hannah Schmeler: 236671
Tremaine Reinger: 857654
Prof. Ola Morissette: 113330
Jade Morar: 431221
Johnny Hagenes: 160071
Letha Purdy: 54831
Virginia Waters: 683381
Morris Johns: 431760
Evie Beer: 819548
Prof. Jonathon Daniel MD: 885609
Mr. Joseph Goyette: 882080
Cora Ullrich: 830585
Gretchen Bechtelar: 415166
Prof. Jerald Raynor V: 97621
Sienna Pacocha II: 776348
Parker Greenholt III: 452518
Nannie Keeling: 63347
Prof. Taryn Bartoletti Jr.: 198424
Rachel Howell I: 869241
Walter Klocko: 361789
Esta Howe: 64139
Junior Cummerata Sr.: 806427
Norbert Emard: 426530
Shanelle Stoltenberg DDS: 126970
Eleanore Leuschke: 399911
Rory Bechtelar: 40886
Prof. Alessandro Hackett PhD: 474729
Tressa Bechtelar: 788296
Bertram Wehner: 155084
Judd Breitenberg: 222766
Miss Gabriella Lehner: 767714
Lafayette Buckridge: 631702
Jaleel Carter DDS: 261777
Myra Quigley: 884304
Nakia Hauck: 899178
Mr. Korbin Vandervort Sr.: 906288
Timmy Beer: 788019
Freeman Carroll: 106418
Grover Wolf: 121170
Karelle Marvin DDS: 567577
Eloy Sawayn PhD: 586363
Maeve Rosenbaum MD: 274013
Mr. Davion Simonis III: 322233
Loraine Schoen: 589511
Meaghan Batz: 657407
Prof. Elinore Yundt: 811007
Dr. Martine Haley IV: 826081
Prof. Franco Deckow: 808960
Carmelo Erdman: 556965
Kirsten Okuneva II: 593713
Bettye Wuckert: 874371
Omer Wyman: 285374
Prof. Waino Paucek: 646808
Emanuel Wiza: 61687
Dayna Kulas: 831111
Sage Schinner: 786578
Miss Erna Rutherford MD: 298275
Maya Dach: 281601
Prof. Brody Raynor I: 199513
Mikel O’Keefe: 430266
Merritt Sporer MD: 221164
Victor Lockman I: 638485
Dr. Albina Corkery Jr.: 188995
Adaline Gusikowski: 716772
Colby Conn: 50165
Forrest Koch PhD: 886986
Adelia Hauck I: 594501
Dr. Marvin Schaefer: 966463
Jamal Wilderman: 134177
Kari Fisher: 154175
Bethany Fritsch: 705211
Maci Kessler PhD: 883209
Mr. Santiago Kuhic: 515725
Prof. Allen Ryan Sr.: 583741
Seamus Williamson: 717664
Angel Ortiz: 246222
Miss Mayra Nienow Sr.: 375505
Dr. Brain Smith: 836466
Martin Kautzer Sr.: 277239
Dr. Ariane Herzog: 817847
Ivah Morissette: 545959
Prof. Evan Rath I: 833835
Oscar Paucek: 668522
Letha Fahey MD: 841699
Natasha Leffler: 907837
Gino Pfannerstill: 677695
Cora West: 293033
Mr. Hobart Predovic DDS: 866580
Linda Feeney DDS: 791371
Montana Ortiz: 376042
Mr. Barrett Mann: 49112
Sally Klein: 758021
Einar Gibson: 650906
Karl Hessel: 471792
Vivianne Schoen V: 536777
Ms. Sandrine Koepp MD: 796855
Alene Abbott: 207282
Dr. Rosendo Wisoky: 871637
Madalyn Schimmel: 474166
Avery Keebler: 439430
Ms. Cathy Strosin Sr.: 236193
Dr. Alexzander Gerhold: 875631
Marlin Hand: 907825
Nat Rutherford: 679892
Ozella Bechtelar: 29033
Dr. Jerrold Schaefer II: 160619
Donny Hackett: 348413
Dr. Leo Boyle: 958107
Shanny Watsica PhD: 194016
Valerie Jakubowski: 474345
Mr. Oda Romaguera DVM: 653850
Mozelle Larson: 820649
Miss Vergie Wisoky: 621743
Ada Balistreri: 321242
Nola Hegmann I: 661165
Abelardo Roberts DVM: 695725
Ines Hamill: 534773
Mrs. Lonie Gleason MD: 692709
Mr. Wyatt Nienow: 122918
Johnpaul Reinger: 920752
Jarod Pagac: 648431
Kavon Conroy Sr.: 340268
Mr. Edgardo Ledner: 309403
Prof. Kayley Eichmann: 475083
Dr. Arthur King II: 135277
Mr. Stefan Ullrich Jr.: 329669
Jaycee Reilly V: 789538
Leila Williamson: 734909
Georgianna Carter Jr.: 98359
Dr. Rickie Harvey: 381880
Mohamed Considine IV: 314608
Dominique Bode IV: 737445
Gregory Kling: 915166
Luciano Torp: 792732
Germaine Jacobs: 403421
Mattie Feest V: 724140
Elfrieda Rowe: 715525
Alysa Kuhic: 137329
Darrion Simonis: 225362
Jules Kuhlman: 589614
Betty Bauch: 167880
Sean Howe: 865511
Dillon Heathcote: 291627
Joe Borer: 887333
Myra Kautzer: 656352
Jaylin Raynor Jr.: 594197
Tommie Miller MD: 435794
Mrs. Bonnie Flatley DVM: 464568
Harold Bednar: 680513
Raoul Rodriguez: 555896
Mustafa Stroman: 740599
Angie Reichert: 383146
Sadye Medhurst: 97379
Jarod Rowe: 492743
Mrs. Therese Schowalter: 907996
Katrina O’Hara: 399710
Roselyn Dickens I: 602842
Vilma Rohan IV: 406121
Miss Stephany Gusikowski I: 379659
Silas O’Conner: 460991
Theresa Senger: 448478
Ted Kessler: 822907
Alva Aufderhar: 247646
Sidney Flatley: 449330
Chauncey Tillman: 842967
Heidi Kassulke: 454108
Ariel Marquardt: 567821
Doris Mitchell: 322608
Eleanore Klocko: 190906
Tamia Walker: 739979
Mr. Oran Bogan I: 284193
Herman Heathcote: 929595
Jorge Fay Jr.: 192661
Annie Gerhold PhD: 798177
Yvette Abbott: 363679
Miss Trudie Feil: 848150
Nia Eichmann: 191353
Dianna Jenkins: 146291
Helen Herman: 394902
Kelli Donnelly: 671320
Ulises Reinger V: 674795
Earline Greenfelder Sr.: 544119
Nathaniel Reilly: 636233
Mr. Mohammed Fahey III: 912504
Susana Kassulke: 107102
Dr. Opal Bailey PhD: 891971
Prof. Maud Sanford Sr.: 278511
Prof. Oda Veum III: 176539
Werner Ondricka: 483780
Nicola Flatley II: 479182
Molly Glover III: 495460
Kelli Bashirian: 591668
Francesco Olson: 246354
Mrs. Ana Morissette Sr.: 891572
Claude Hyatt III: 694025
Ms. Lillie Rohan: 713041
Beverly Gottlieb: 779446
Ignacio Murphy: 561982
Prof. Alexandro Torphy: 569541
Haskell Champlin: 738475
Alia Eichmann: 433464
Miss Janet Lind Jr.: 466231
Brennon Monahan: 883834
Alexa Price: 145950
Jett Crona: 420163
Monserrate Dooley: 118850
Ivory Murray: 202848
Braulio Rowe II: 209430
Dr. Elnora Senger: 390187
Sigurd Friesen: 382707
Mrs. Jolie Schaden III: 198362
Damion Labadie: 948766
Alysa Dare: 677398
Evan Luettgen DVM: 155174
Braeden Kirlin: 800827
Lucile Lehner: 829952
Cristian Kirlin DDS: 572306
Linda Ankunding: 868985
Karen Boyer V: 780293
Leanna Kuhlman: 303847
Shanelle Bergnaum: 183166
Bertha Reichel: 427948
Orland Gislason Sr.: 362390
Ms. Patience Hahn: 257833
Chris Beahan: 886834
Miss Shanny Ebert: 877008
Maudie Marquardt: 798328
Marshall Gusikowski V: 703158
Dr. Kareem Botsford Sr.: 105883
Prof. Gillian Hand: 182609
Axel Nicolas DDS: 355843
Mathilde Wintheiser: 655519
Ramiro Abbott: 436116
Ellsworth Konopelski: 465259
Jolie Cronin: 939042
Coy Blanda: 262407
Bernadette Zulauf: 816187
Benton Sipes: 399236
Cade Berge: 243017
Maud Legros: 522261
Kacey Larson: 375450
Jesus Kshlerin: 306265
Weldon Glover: 307173
Blanche Effertz: 594376
Dr. Ayden Ruecker: 356612
Telly Jaskolski: 192278
Dr. Kole Macejkovic PhD: 26281
Mrs. Asia Ryan: 753596
Ms. Tia Smitham PhD: 446821
Elda Considine III: 847061
Aletha Toy: 667463
Mr. Austyn Hoppe: 696673
Prof. Christina Block Sr.: 838932
Prof. Brandon Larkin I: 30679
Prof. Alessia Schimmel: 678629
Barton Donnelly: 202666
Weldon King: 806745
Eda Gorczany: 595679
Mr. Horace Farrell: 507607
Rogers Mante: 543937
Flavio Kunze: 562427
Mrs. Verna Osinski DDS: 253929
Colt Torp: 633596
Prof. Ellen Zieme: 270921
Jude Hermann: 877682
Palma Bartell IV: 60928
Fabian McGlynn IV: 49585
Brycen Larson: 745782
Miss Kenyatta O’Connell: 738230
Trystan Huels: 592183
Stanley Monahan: 517984
Evalyn Funk IV: 209275
Austen Parker PhD: 763131
Otha Leffler: 584334
Fritz Emmerich: 475424
Paul Dicki: 855432
Dr. Cyrus Nikolaus: 265084
Ms. Abbie Wilderman: 319898
Mona Rutherford: 391194
Adam Schowalter III: 517938
Herminia Schamberger MD: 413384
Alessandro Paucek: 552377
Mr. Jasen Bosco DDS: 909152
Prof. Ramon Willms IV: 249430
Prof. Kendall Green III: 345679
Lane Strosin: 391001
Heloise Boyle: 574047
Rosalind Schoen: 171181
Dr. Michael Ziemann: 869255
Earl Purdy: 516239
Sigrid Grady: 228951
Terrill Carter: 515118
Will Wintheiser: 301399
Lacy Bahringer: 310027
Miss Deanna Lockman: 862147
Angela Goodwin: 297156
Alessandro Keeling MD: 515352
Libby Flatley: 586857
Prof. Aracely Gutkowski II: 754941
Ned Towne: 474772
Verdie Kessler: 895070
Cody Rolfson: 123257
Mrs. Mozell Hartmann III: 159201
Roberta Weimann: 857072
Alvina Klein Sr.: 746524
Prof. Winston Steuber: 108403
Ms. Mina Ledner: 396474
Carmella Gibson: 605664
Prof. Freeman Altenwerth Jr.: 731091
Kylie Jacobi: 48430
Leonard Rath: 400235
Linwood Hagenes Sr.: 59220
Maryam Brown II: 794986
Pamela Barton Jr.: 67680
Urban Rice DVM: 254806
Ransom Beatty: 59532
Mrs. Vicky Heaney: 624587
Lois Mills: 406457
Gene Pfeffer V: 113667
Crystel Shields: 629188
Mandy Emard: 159484
Richmond Leuschke: 881876
Liliane Mayert: 10885
Nikki Stark: 249846
Dr. Lenora Keeling I: 444646
Tate Monahan Jr.: 314717
Napoleon Murphy: 159133
Jakayla Lind: 879802
Andrew Schaefer: 430141
Iliana Becker: 255310
Ms. Jacquelyn Feil MD: 104523
Elenora Haag: 156516
Haven Herzog: 517577
Brandt Reinger: 94208
Robin Beer: 618561
Shaun Kassulke: 754032
Lue Dicki: 193003
Isobel Sauer: 585267
Ms. Winifred Lindgren IV: 396050
Oceane Nader: 385055
Miss Aylin McLaughlin: 737755
Ethan Kutch: 202474
Prof. Felipe Parker III: 421051
Graham Hilpert: 919300
Adella Schaden: 569033
Earlene Toy: 195196
Dr. Timothy Rolfson I: 166134
Merritt Casper: 805047
Prof. Milton Casper Jr.: 419493
Dr. Arne Bahringer: 471176
Pauline Yost: 693461
Imogene Simonis: 915121
Jaren Sawayn: 235615
Rosendo Tillman: 813720
Ms. Mathilde Goldner DDS: 400420
Mr. Everardo Little: 756265
Dr. Cecilia Reynolds: 263110
Eulalia Tremblay: 279449
Augusta Ferry: 342779
Ismael Davis: 474737
Helene Reichel: 426335
Mack Bins: 748622
Darion Cormier: 514214
Sammie Treutel: 938744
Estrella Beatty IV: 209549
Adam Friesen I: 392657
Prof. Damon Jacobson III: 318990
Prof. Rodolfo Cremin: 306834
Mrs. Lexi Mitchell Jr.: 650231
Prof. Kennedi Howe: 804810
Dr. Jaclyn Beahan Sr.: 115785
Prof. Johnpaul Howell: 190378
Hazel Cartwright: 91905
Mr. Kirk Flatley Jr.: 712948
Caesar Gleason: 255445
Fatima Goodwin: 150201
Kendra Weber: 560587
Darren Jerde IV: 908782
Tommie Jacobs Jr.: 317909
Haskell Schoen: 850114
Keven Mraz DDS: 430806
Odie Stoltenberg: 837780
Burdette Abernathy Sr.: 495573
Dallin Raynor: 336786
Danial Auer: 533717
Jevon Kohler: 270411
Mr. Consuelo Schmidt MD: 546372
Miss Guadalupe Schimmel: 557555
Toby Lesch: 434764
Mr. Marcel Ortiz: 873635
Dr. Jonathon Harris: 529642
Ebony Beatty IV: 486090
Edwin Kunze: 625220
Prof. Orlando Schamberger III: 138339
Tessie Gottlieb: 666890
Reece O’Conner: 220050
Dr. Margaret Cummerata DVM: 871237
Dr. Eulah Christiansen I: 514982
Dr. Bradley Heller: 284594
Obie Schiller: 549432
Jeremie Parker: 648923
Prof. Audie Champlin: 928374
Kale Klocko: 410923
Miss Callie Hermann MD: 673063
Troy Huel III: 298312
Ezequiel Nitzsche: 752926
Deja Abernathy: 813454
Erin Adams: 287160
Earl Reichert: 765114
Petra Hansen: 259750
Marcelle Rogahn: 327263
Henry Kozey: 629743
Dr. Mauricio Wuckert V: 622993
Joshuah Feil: 339371
Jayde Monahan: 576288
Tyrel Dickens: 704079
Prof. Finn Steuber Jr.: 663745
Dr. Taryn Gleichner: 161378
Erich Beer DDS: 636505
Kattie Dickens: 199066
Mr. Kristoffer Schowalter II: 516736
Jacky Stiedemann: 600287
Prof. Art Schuppe: 807590
Prof. Rowena Glover DVM: 881943
Aiyana Kutch Jr.: 419823
Dr. Albin Abbott I: 723379
Dr. Waino Bayer: 495673
Dr. Mittie Daniel MD: 618541
Christiana Skiles: 882931
Zane Nikolaus: 427974
Brisa Sporer MD: 401529
Raul Gusikowski: 367667
Prof. Jarret Quitzon: 676493
Katlynn Reynolds: 137236
Mr. Peyton Weber: 637168
Brody Bode MD: 521705
Alene Kuhic: 867699
Dr. Bennett Hickle: 28096
Jace Graham PhD: 456970
Berta Beahan: 914155
Bernice O’Keefe: 110627
Gisselle Raynor: 688497
Crystal Blanda: 57660
Dominic Runolfsson Jr.: 706097
Isabelle Skiles DDS: 440798
Arlene Barrows: 773854
Dejuan Runolfsson: 767075
Mckenzie Champlin: 383262
Keeley Carroll: 24638
Verona Schaden: 361957
Mr. Corbin Schuster: 688729
Lewis Wilkinson: 167710
Mr. Wayne Effertz Jr.: 290049
Kamren Turcotte: 866692
Garnet Kunde: 282296
Sidney Reichert: 95142
Darwin Turner Sr.: 837480
Ms. Ruth Kutch: 723972
Dr. Lizzie Hilpert III: 902463
Vivienne Friesen: 586369
Paul Gerhold: 684496
Brody Braun V: 727906
Sally McDermott: 206938
Prof. Jarret Dickinson DDS: 783124
Jacey Bartell: 275223
Dr. Izaiah Reinger: 258935
Ahmad Brekke: 589214
Carmen Becker: 545288
Mable Cruickshank: 160870
Thea Eichmann: 518026
Name Lesch: 646470
Dr. Jackson Mills DVM: 273888
Hilbert Satterfield III: 83889
Chad Schaden: 880992
Soledad Metz: 861772
Nannie Pacocha: 586992
Selina Glover: 494353
Sigurd Greenholt: 309875
Alanna Wuckert: 839526
Dr. Elvis Collins DDS: 513040
Dr. Adrain Howe DDS: 833519
Oswaldo Bernier DVM: 843118
Enid Cartwright: 385560
Ellsworth Turner: 541815
Leonel Bashirian Sr.: 350024
Prof. Fatima Waelchi: 629360
Clark Rolfson: 471352
Calista Langosh: 350054
Olga Herman: 600924
Junior Ernser IV: 155478
Fay Pouros: 533130
Carissa Davis: 560851
Dr. Jerry Schoen: 613690
Jed Hermann: 950529
Ms. Elisabeth Ratke IV: 747137
Mr. Nico Schmeler: 611991
Bridie Kozey: 526896
Mrs. Karlee Lubowitz III: 390251
Prof. Dax Hessel: 651963
Brook Reichel Jr.: 124204
Prof. Cheyanne Sawayn III: 224259
Mr. Devon Shields I: 963060
Aurelie Dickens: 898182
Emmett Robel: 633968
Dr. Rowland D’Amore MD: 455627
Maxime Schaden: 865637
Savanah Schimmel: 136514
Mrs. Catharine Bechtelar DVM: 810356
Karl Goldner: 614723
Deon Gleason: 39967
Jazmyne Streich: 242412
Retta Kuhn: 179082
Alexys Marks: 401510
Prof. Laverne Sauer: 728413
Kassandra Cormier: 99214
Lola Auer: 208681
Mr. Abel Anderson: 410550
Xander Mohr: 685197
Fabian White: 25027
Jamarcus Kunde MD: 182723
Prof. Schuyler Prosacco: 283521
Dr. Godfrey Bins Sr.: 93885
Aletha Cummerata IV: 317884
Laron Wolf: 836743
Prof. Ewald Marvin V: 147523
Ms. Layla Cartwright: 237724
Wendy Wilderman: 766208
Elsa Sawayn: 747400
Leonard Hoeger: 607293
Santina Hegmann: 634310
Carole Halvorson: 143462
Dr. Norbert McDermott: 499215
Clair Haag: 513298
Dr. Magnus Muller DDS: 172578
Shanon O’Reilly: 266347
Keely Nikolaus: 311862
Joe Murphy: 499499
Alysha Romaguera Sr.: 153641
Libby West: 646701
Jayden Beer: 46338
Austen Tillman: 437432
Eve Smith: 187343
Magdalen Schmitt IV: 850514
Taryn Kovacek: 946746
Guillermo Berge Jr.: 118064
Dejon Hammes: 364524
Nia Collins: 538274
Mrs. Katelynn Prosacco: 271734
Daniela Auer: 901447
Prof. Sebastian Rosenbaum V: 102472
Tyrese Schmitt: 586790
Berneice Hessel: 311968
Merl Roberts PhD: 606131
Dr. Dulce Moen: 975515
Ashton Bins: 519992
Dante Franecki: 802538
Prof. Enrique Price: 492565
Ms. Vida Lynch: 345139
Dr. Rafaela Hills: 582055
Billy Kshlerin: 400582
Josefina Romaguera: 337450
Raheem Ullrich MD: 500519
Jett Weimann: 824999
Mr. Jeremie Sauer V: 234011
Prof. Grady Kohler: 543517
Dr. Madison Carroll: 521322
Agustin Zemlak: 111051
Dr. Morgan Konopelski: 637524
Chase Reilly: 328229
Golda Glover III: 688448
Herminia Johnston: 674586
Dr. Dagmar Yundt: 480574
Annabelle Kunze V: 633466
Mr. Gianni Abernathy DDS: 699277
Kaleigh O’Reilly: 210772
Milo Heathcote: 161665
Floyd Heller: 628932
Enola Goyette: 627951
Matt Bogan: 564704
Mr. Delbert Lind: 216343
Scotty Davis: 925806
Alberta Heidenreich: 684949
Miss Julianne Harvey: 263609
Monte Borer: 747018
Therese Murray: 964599
Prof. Tressa Crooks Jr.: 634672
Berenice Berge Sr.: 316603
Dr. Benton Donnelly DDS: 797161
Osvaldo Herman: 778581
Delmer Botsford: 517693
Percival Kling: 517804
Prof. Blaise Ullrich DVM: 456862
Meta Langworth: 175386
Mr. Delbert Koepp II: 71745
Mrs. Katrine Watsica: 370693
Karelle Herman: 168542
Eino Graham: 639634
Dr. Liliane Jast: 453903
Elda Kautzer Jr.: 757907
Shana Watsica II: 540219
Ms. Mya Beahan Sr.: 625674
Abigail Heaney: 100022
Mara Gulgowski MD: 354510
Mrs. Harmony Mann DVM: 841496
Jakob Sauer: 788521
Genevieve Wisoky V: 929683
Prof. Keven Collier: 594158
Carli Gerhold: 659470
Prof. Casandra Kunde Sr.: 222875
Orval Labadie DDS: 862576
Lois Roob: 163367
Prof. Leanne DuBuque: 310168
Dr. Justyn Senger: 639272
Mr. Brett Zboncak V: 381412
Jed O’Kon: 67946
London Emard: 400486
Erika Tromp: 125782
Olen Leffler: 382686
Prof. Ada Huel DVM: 748627
Royce Schumm: 258506
Hellen Nader: 899358
Lenna Larkin DVM: 447783
Ms. Effie Larson: 119818
Mr. Tyson Jerde: 137658
Dr. Freida Leannon Jr.: 519875
Dr. Ezekiel Schinner: 146071
Dr. Alfonso Bahringer DDS: 788334
Sheila Carroll: 654923
Prof. Ian Witting: 429862
Dr. Barney Sawayn: 134201
Virginie Kerluke: 757581
Ciara Boyle II: 135798
Prof. Dallin Hayes: 884490
Aglae Haley: 264667
Prof. Elvis Kilback: 766320
Camilla Pouros II: 373878
Derick Marks DVM: 93684
Kelsi Donnelly: 737645
Dr. Katelynn Nader MD: 196623
Jesus Heaney: 91011
Ora Hudson MD: 630002
Prof. Jerome Satterfield Sr.: 174822
Mr. Marcos Schamberger: 188864
Prof. Missouri Okuneva: 501783
Zita Gorczany: 449425
Bridie Yundt: 193514
Lionel Toy: 924922
Carolina Hegmann: 943234
Webster Schultz: 421006
Bette Beier: 857061
Lew Gleason Jr.: 858197
Mr. Wilhelm Stoltenberg III: 376260
Aileen Parisian: 480586
Dr. Isac Gaylord: 177499
Dr. Kory Carroll: 454788
Dr. Fritz Aufderhar III: 703150
Alexandra Becker: 308710
Daryl Hermiston: 810153
Lempi Blick: 981982
Marlene Wilderman: 421810
Jadon Gorczany: 381211
Josefina Mayert DDS: 232073
Francesca Ullrich: 253625
Xavier Pollich: 151626
Ms. Maida Skiles PhD: 329002
Kailee Armstrong: 321847
Jeremie Hahn III: 681810
Emory Anderson: 310347
Tyson Padberg: 338361
Agustina Harvey V: 888521
Felton Waters: 126076
Prof. Lizeth Rowe: 229343
Dr. Charlotte Dickinson: 362730
Ms. Karianne Beahan PhD: 821703
Lourdes Hoppe: 860447
Marcelina Flatley: 56886
Elwyn Bailey MD: 906088
Sterling Morissette: 532945
Kathleen Adams I: 152960
Trinity Bartell III: 887159
Mrs. Sallie Emmerich II: 303218
Ola Kuhn DVM: 831848
Orland Spencer: 415106
Courtney Cummings IV: 117880
Maximilian Bahringer: 72018
Roxanne Smith: 212261
Nolan Von: 953564
Dario Orn: 667142
Corbin Collins: 135698
Prof. Ignatius Thompson: 37318
Emil Hermiston: 431790
Aurore Sauer: 886569
Dr. Meghan Reinger DDS: 913951
Miss Augusta Johnson Jr.: 600197
Mr. Archibald Hackett: 427163
Maia Bednar: 860998
Queenie Weber: 600817
Andrew Mante: 670562
Donny Halvorson: 164050
Giovanny Heller: 64700
Buford Keeling: 621578
Ludwig Homenick: 896975
Carmelo Sawayn: 282867
Amira Eichmann: 230266
Adaline Lakin III: 179903
Prof. Theresia Zboncak V: 609569
Annabel Beer: 935247
Roman Will: 349699
Ansley O’Reilly: 91264
Dr. Shayna Feest: 646466
Loren Breitenberg: 535988
Ransom Armstrong: 118694
Richie Ratke: 493024
Ms. Jana Hackett DVM: 130937
Adalberto Pacocha: 425579
Clotilde Cruickshank: 869282
Caroline Purdy: 363193
Lou Lowe: 532305
Tyra Cronin: 183612
Reva Barrows: 870300
Erwin Koelpin: 614018
Ms. Juana Rempel: 184313
Demetrius Mante: 210020
Vilma Conn: 68258
Kane Reinger: 381271
Evans Pfannerstill: 514272
Valerie Mertz: 942616
Destini Glover: 211614
Prof. Ansel Kunde DVM: 243188
Dr. Amalia Kertzmann DVM: 264362
Tobin Cronin: 631392
Onie Windler DVM: 585771
Percival Tillman: 515900
Jude Torp: 258670
Neal Nolan: 522632
Ms. Edwina Kub: 316318
Prof. Damien Bahringer DVM: 477574
Joaquin Flatley: 395178
Leopoldo Howell: 373461
Anderson Mohr: 614475
Mr. Chadd VonRueden MD: 950450
Jerrell Metz: 746508
Estelle Reichel: 496889
Jeanie Heidenreich: 37993
Bettye Little: 621011
Mr. Darryl Harris Jr.: 914723
Ressie Stamm MD: 355129
Mireille Kshlerin: 110031
Maxie Heaney: 532636
Ella Casper: 522478
Mitchell Johnston: 359558
Trycia Langosh: 185172
Anne Hartmann V: 690664
Kaley Fahey: 383196
Ricky Abbott: 630060
Skye Wilderman: 682692
Milan Roob: 858738
Ardella Zieme: 279541
Miss Samara Bogisich: 758079
Gina Rath: 908271
Joy Torphy: 238903
Lexus Sipes: 786313
Alfonso Crooks: 565263
Jedidiah Hayes: 452831
Ms. Jannie Stoltenberg I: 756578
Sim Stehr DDS: 827695
Vanessa Homenick: 107159
Mr. Benedict Abernathy Sr.: 840804
Vaughn Dietrich: 904665
Keon Funk PhD: 219856
Tyler Weimann: 578162
Nicholaus Becker: 902589
Ross Borer: 414602
Trent Jaskolski: 239594
Lucious Murray: 479130
Clint Kutch MD: 274821
Aurelio Mann: 282541
Dr. Velda Schulist: 858781
Cullen Mueller: 161050
Leslie Gutmann: 473347
Destiney Schmidt: 512064
Russell Corkery V: 266643
Barton Lynch: 374787
Gerry Stracke: 599196
Freida Murray: 233203
Vicky Hegmann: 140524
Dr. Isai Emard: 812391
Era Gleason III: 487934
Odessa Schultz: 176291
Alyce Rohan DVM: 582423
Hassan Terry: 747526
Rosalia Lakin II: 571957
Isom Powlowski: 256896
Justyn Spencer: 637942
Chaim Stoltenberg DVM: 759490
Kaitlyn Bayer: 853647
Brittany Konopelski: 727821
Joe Tremblay: 635920
Laury Upton: 523159
Shemar Rippin: 482980
Kiana Bernier: 778801
June Goyette MD: 637813
Rollin Smith: 724842
Tianna Rau: 316584
Troy Kassulke Sr.: 151201
Dorthy Boehm: 102855
Bettye Gutkowski: 643067
Kenna Kling IV: 58823
Geovany Volkman: 907915
Prof. Peyton Rowe PhD: 773601
Arthur Cummings: 820087
Adeline Howell: 188384
Weston Koch Sr.: 195013
Dante Torphy: 715045
Dr. Cristopher Fritsch: 461824
Audie Kassulke PhD: 862121
Gavin Mohr: 858211
Jerome Gleason: 661876
Marquise Zieme PhD: 599679
Rebeca Hammes: 691622
Kelley Ratke: 458561
Kenyatta Dach Jr.: 10239
Ebony Harber: 698297
Dr. Gracie Schneider Sr.: 119446
Dr. Korey Murray DVM: 170504
Edythe Doyle: 658913
Monique Batz: 677594
Karolann Rodriguez: 655998
Juwan Runolfsdottir V: 263515
Wanda Berge: 774193
Georgette Gottlieb: 412797
Dr. Rylan Kris: 379643
Nona Walker: 881073
Cody Dibbert: 607709
Kellie Simonis III: 73117
Dr. Craig Kutch: 670875
Julianne Thiel: 369434
Fidel Wolff: 779415
Mrs. Hope Pacocha MD: 185767
Eleonore Wilkinson: 74574
Prof. Antoinette Schaden: 398665
Ezequiel Beatty: 180480
Austyn Hermann: 491098
Robb Dach: 115606
Sylvia Schaefer: 401493
Trace Kuphal: 924770
Keegan Larkin: 317226
Gretchen Haley Jr.: 706233
Lenna Cole: 122927
Skye Murazik: 633021
Winona Kihn DVM: 393085
Mr. Erick Simonis Jr.: 699176
Mr. Casimer Runte: 168026
Andy Stehr: 55420
Rollin Upton DDS: 917290
Miss Georgiana Leannon: 340060
Estel Muller: 117911
Anjali Abernathy: 87985
Trey Torphy: 594684
Nels O’Conner: 277515
Rosalinda Bashirian: 778669
Dr. Moshe Daniel III: 434901
Jovany Kertzmann: 426385
Claude Armstrong Jr.: 90429
Anahi Bogisich: 76786
Jacquelyn Rutherford IV: 689910
Helmer Blanda: 393096
Oceane Von: 648024
Daniela Haley: 734996
Dr. Nicole Fay: 678978
Raina Collier V: 667743
Favian Klein: 218201
Josiane Langworth: 363258
Kailee Pollich: 693137
Joesph Sauer PhD: 329888
Marcelina Zemlak: 430534
Dr. Laurine Bogisich MD: 723699
Mr. Beau Cremin: 620600
Anjali Orn: 697181
Shanon Moore: 103041
Valerie Greenholt: 564949
Savion Farrell: 919360
Petra Heller II: 921030
Bobby Hamill: 677144
Mabel Bode: 82921
Prof. Jovanny Champlin IV: 817795
Napoleon Weber: 328534
Lurline Yost: 746655
Deangelo Johnson: 578244
Noemi Gleichner: 783934
Mrs. Juliana Abbott DDS: 189664
Esperanza Harvey: 140721
Bonita Klein Sr.: 211585
Dr. Harry Bradtke: 328462
Adriel Considine: 712091
Bertrand Nikolaus DVM: 526297
Mr. Carlos Mitchell PhD: 677004
Samir Kuhic IV: 903645
Jane Parisian MD: 145134
Dr. Mittie Herzog: 580511
Alia Pfeffer II: 441074
Gerard Quitzon MD: 753766
Johnathan Veum: 875577
Delaney Nikolaus: 703639
Norbert Rosenbaum: 20777
Prof. Katrina Schamberger: 530870
Wilbert Davis: 744631
Prof. Cletus Hammes IV: 858181
Alfonso Bayer: 212909
Dustin Koss: 934994
Christina Koepp I: 581927
Travon Raynor DDS: 49796
Dr. Joan Klein: 394336
Dr. Demarco Kuvalis: 793715
Matilda Heller DDS: 119949
Miss Earlene Kihn: 242605
Mrs. Antonia Lockman: 175135
Dr. Joaquin Mayer DDS: 930770
Miss Elinor Harber MD: 871380
Green Barton: 187197
London D’Amore: 758109
Rashawn Carroll: 761043
Mr. Wilfrid Hirthe Jr.: 737753
Emma Hamill: 280687
Kiana Romaguera: 586244
Beatrice McDermott: 667174
Mr. Immanuel McGlynn PhD: 705895
Mrs. Cali Dach: 924364
Domenick Wintheiser: 626556
Julia Toy: 622246
Prof. Miguel Prohaska: 882047
Erick Crona: 612131
Myrtis Heller I: 267590
Lizzie Rogahn: 592487
Mr. Mervin Bechtelar IV: 943575
Beulah Lynch: 191741
Kaleigh Bogisich: 454261
Judd Mitchell: 729795
Mozelle Grant: 888823
Wilfred Cruickshank: 121019
Edna Schamberger: 337802
Anahi Wyman: 821787
Miss Ora Greenfelder III: 324212
Miss Alene Orn: 239361
Allison Koss PhD: 469415
Dr. Myrtis Hackett DVM: 861633
Dr. Brannon Ernser: 440347
Durward Hand: 124239
Laurine Considine DDS: 346325
Prof. Chelsey Grimes II: 946899
Mose Yost: 723914
Ms. Krystina Nikolaus I: 446280
Lafayette Hegmann: 193055
Gunner Kihn: 458070
Nona O’Keefe: 814544
Annetta Carter: 52859
Prof. Dillon Simonis MD: 213703
Prof. Devon Mitchell V: 157079
Cyrus Treutel MD: 160776
Geraldine Bartoletti: 221095
Dr. Destinee Cole Jr.: 821812
Presley Braun: 351440
Ocie Hintz: 187241
Jaiden Turcotte: 208215
Cristopher Renner: 757396
Prof. Asia Batz DDS: 222175
Pearline Kunze: 844500
Kelly Ortiz: 604467
Miss Lorena Schuppe IV: 421356
Mr. Eriberto Boyer III: 517861
Dr. Flo Walker DVM: 884550
Kristy Flatley DVM: 218207
Coleman Gusikowski: 336384
Prof. Nicola Will: 532224
Dr. Rosendo Kihn: 710441
Adele Mayert: 115947
Freda Cruickshank: 313726
Talia Kirlin: 181291
Mrs. Reba Jast Sr.: 114916
Lolita Stamm: 570606
America Lindgren: 942024
Austyn McCullough: 354849
Dr. Florian Hagenes Sr.: 150873
Dr. Hollie Lockman PhD: 810953
Mr. Wallace Wisozk Sr.: 750225
Lazaro Cummerata III: 7675
Alanis Pouros V: 666356
Dr. Jillian Abbott: 375338
Dr. Sherwood Crona Sr.: 364947
Elwyn Hackett: 832950
Dasia Toy: 515297
Maiya Bayer: 535371
Ines Ullrich: 565725
Doug Haley III: 285495
Deshaun Pagac: 645972
Eloy Zieme: 318931
Fatima Schmeler: 263289
Beth Hackett: 594847
Lowell Emmerich: 762432
Dr. Xzavier Kerluke PhD: 199806
Katrina Zieme: 406400
Ila Leffler III: 267124
Ernest Feil: 159185
Jacinto Rath: 395269
Miss Beryl Gorczany IV: 931974
Prof. Tomasa Huel PhD: 50149
Miss Alexandria Kovacek PhD: 234104
Mr. Rodrick O’Hara V: 125993
Trevion Hansen MD: 64511
Mr. Dario Balistreri: 681267
Karlee Dickinson: 288340
Prof. Esteban Dietrich: 862729
Prof. Deion Gutkowski: 158845
Isabel Bernier V: 167442
Dr. Jarvis Cremin Jr.: 915923
Prof. Devyn Olson II: 569485
Mr. Ronny Bogisich: 306825
Shad Torphy: 850598
Prof. Lilyan Emmerich IV: 108969
Mr. Omer Gulgowski PhD: 539354
Delta Kozey: 102829
Shad Considine: 345834
Alexys Smith PhD: 437286
Hans Turcotte: 662216
Prof. Jerrold Dach: 858433
Jaylen Gorczany: 812286
Syble Dibbert: 686614
Miss Destinee Luettgen Sr.: 549895
John Halvorson: 883450
Ms. Ana Carroll: 817688
Jesse Reynolds: 500733
Adrienne Larkin: 90235
Mrs. Rhea Gusikowski: 694483
Rahul White: 713766
Nels Runte: 362198
Dr. Frederik Hartmann Sr.: 564219
Webster Schimmel: 646135
Alexys Brekke: 738312
Jaclyn Cruickshank DDS: 604528
Mathias Willms: 938974
Pamela Mann: 345189
Rodrigo West: 99855
John Smith Jr.: 104276
Felipe Zboncak: 716039
Velda Kshlerin III: 130772
Miss Camilla Green: 40475
Bernie Beahan: 438581
Mrs. Pearl Rogahn: 672492
Reba Larson: 522982
Santiago Beatty: 66256
Claudine Hamill: 324561
Rolando Grant: 620125
Prof. Audie O’Kon: 237255
Margaret Osinski: 133900
Ms. Aleen Bahringer: 875753
Prof. Morris Turner: 186612
Prof. Anissa Schmidt: 827430
Jessyca Wolf: 546358
Shad Schumm I: 698568
Laury Jacobi: 212929
Zoey Kris: 545136
Mrs. Pansy Harvey: 892385
Arthur Emard: 763262
Mrs. Annabelle Keeling: 489161
Sonia Rempel: 557178
Roberta Macejkovic V: 382978
Selmer West: 711809
Kaya Romaguera: 551431
Lois Hamill: 897209
Cristal Kassulke: 584009
Keara Jakubowski: 453482
Lucie Weber: 146210
Prof. Leopoldo Hamill II: 638709
Dr. Raymundo Parisian DVM: 794409
Emmanuelle Turner Jr.: 367898
Mr. Lazaro Rippin: 602078
Dr. Chauncey Kohler DVM: 343537
Brendan O’Conner: 393133
Prof. Loma Herzog: 489007
Edmond Reinger: 354514
Prof. Jaylan Schuppe IV: 483916
Lexus Bednar: 439601
Beatrice Lockman: 863050
Dr. Nat Corwin: 426436
Kamren Okuneva Jr.: 846518
Mariana Roob DDS: 775224
Arielle Rolfson: 186288
Erich Feil: 255283
Mittie Smith: 241359
Amalia Schulist: 675789
Hailie Block: 103325
Ms. Ellen Stehr: 803772
Tara Davis: 139030
Sigurd Erdman: 341874
Nannie Marks Sr.: 611647
Mrs. Arvilla McDermott I: 242015
Berenice Macejkovic I: 915534
Earnest Steuber: 927456
Luis Bins I: 210439
Miss Lila Farrell: 278441
Danika Davis: 610985
Shannon Langosh: 590149
Carissa Reynolds: 200621
Lila Littel: 889734
Issac Block: 812424
Laverna Ward: 407568
Louisa Krajcik: 486533
Rebekah Reynolds: 566348
Loy Dibbert DVM: 63091
Pearlie Gibson DDS: 402244
Jeffrey Considine PhD: 162769
Miss Petra Stokes: 865716
Christiana Ryan V: 610294
Kameron Robel: 465638
Sharon Brown: 416343
Dr. Kyra Gutkowski: 187905
Parker Schoen: 753338
Dr. Helen Orn: 637613
Dr. Kraig Roob Sr.: 408905
Gillian Crona: 204872
Rosalind Stanton Jr.: 768187
Gussie Schuster: 766053
Samara Howell: 115946
Sibyl Blanda: 324930
Monserrate Frami: 640076
Dr. Fausto Stark: 306537
Ms. Holly Breitenberg: 486048
Carey Breitenberg: 639932
Missouri Sanford: 336134
Deondre Jerde: 108740
Piper Sauer: 765920
Ada Schmitt: 217245
May Bartoletti III: 750330
Jaden Krajcik: 595307
Dr. Elyssa Simonis: 156601
Ella Skiles: 802494
Prof. Bartholome Sawayn: 306029
Seamus Brown: 379515
Miss Wanda Braun V: 377839
Marie Walker: 162768
Giles Hackett: 96570
Mrs. Nona Ankunding: 848773
Rubye Abshire DVM: 306880
Camron Gulgowski MD: 482349
Dr. Consuelo Yost DDS: 542977
Freda Sawayn Sr.: 169014
Granville Osinski: 370785
Prof. Genevieve Ortiz MD: 468711
Cielo Rutherford MD: 304118
Dr. Hulda Kulas: 53590
Keven Wiza: 872173
Kale Rau: 515560
Dr. Einar Abernathy: 616368
Dr. Joesph Lebsack: 145510
Brannon Bayer: 806382
Mrs. Violette Torp I: 524668
Teagan Fadel: 214513
Abigale Deckow: 542006
Nestor Marks: 311684
Gabriella Abshire I: 401441
Wallace Padberg III: 563607
Dr. Harry Schinner MD: 103345
Mrs. Jada Berge: 282937
Gonzalo Quitzon MD: 609128
Adan Schuster: 289604
Denis Wisozk: 382153
Lynn Feil MD: 58026
Mr. Presley King PhD: 820802
Katherine Rohan: 247778
Madie Hermiston: 746143
Miss Jayne Kohler V: 521899
Savannah Pagac: 311358
Robin Heidenreich: 177758
Karli Champlin: 771353
Dallin Jenkins DVM: 245548
Pascale Mohr: 694907
Prof. Thaddeus Wisoky Sr.: 125926
Prof. Levi Hyatt: 776366
Ida Dooley: 571364
Selena Zemlak: 272460
Hollis Parker: 799707
Trudie Feeney: 864058
Garrick Langworth: 210709
Tina Kshlerin: 506548
Werner Hilpert: 423513
Prof. Marilie Effertz II: 20864
Aiden Swift: 717528
Cleo Jacobson DDS: 730170
Mozell Howell: 274206
Bulah Terry: 788836
Mollie Kihn: 848362
Gordon Bayer: 194574
Florida Boyle: 759778
Modesta Stiedemann DVM: 543216
Don Hammes: 744388
Prof. Iva Ryan: 911571
Freddie Jerde: 228859
Prof. Fermin Stoltenberg: 301714
Consuelo Green: 800156
Dr. Anais Beier: 654477
Kristian Gerhold: 298579
Marcelino Stamm MD: 524049
Dr. Muriel Schuppe: 725642
Zane Turner: 287911
Lelah Christiansen: 163445
Carmela Lubowitz: 390080
Mr. Tyrel Kunde: 178003
Stella Rath: 465025
Luella Schaden: 823865
Ms. Jermaine Wehner: 616214
Diego Gulgowski: 159380
Chelsie Willms I: 321085
Tillman Crona: 266582
Phyllis Gislason: 496669
Prof. Hillary Tromp: 378609
Mathias Hirthe: 794288
Dewayne Considine II: 737020
Arlie Schaefer: 860739
Chadd Ondricka: 906241
Arlene Treutel: 749713
Bulah Ondricka: 890851
Elaina Lowe: 774622
Shania Pagac MD: 165475
Clinton Ferry: 447345
Ike Dietrich: 384283
Adrianna Tremblay I: 512177
Mustafa Barton: 836726
Kirsten Goyette: 390132
Claud Stamm: 840235
Moises Mante: 133069
Gussie Ruecker: 154627
Deja Schaefer: 263341
Merritt Feest MD: 547709
Prof. Elsa Nitzsche MD: 148080
Mrs. Agnes Stanton DDS: 377633
Fredrick Heller: 880111
Jordi DuBuque: 710984
Ethyl Botsford: 137384
Cristobal Rau: 296710
Clarabelle Zulauf: 661265
Miss Serenity Schuster MD: 802713
Sandra Oberbrunner: 353573
Jack Rosenbaum: 589635
Torey Corkery: 386385
Katheryn O’Connell IV: 850513
Ross Kerluke: 603442
Miss Loren Bradtke MD: 429536
Makenzie Reichert Jr.: 857601
Ms. Darlene Bednar: 559351
Viola Wilkinson: 317860
Casandra Mayer: 348565
Rolando Ullrich IV: 591328
Kiel Funk: 53724
Owen Fritsch: 420721
Malachi Lubowitz: 132437
Lourdes Murphy: 947685
Krystal Ledner: 425285
Prof. Miguel Huels V: 527686
Irma Nikolaus: 127237
Shanelle Hahn: 529767
Luisa Stehr: 124674
Neal Kohler: 688713
Audra Parisian: 885278
Miss Mattie Berge: 363670
Leda Moore: 677446
Shana Boyle: 181588
Josianne Kshlerin: 161254
Prof. Eleonore Johns: 593909
Kayleigh Johns: 236765
Augusta Casper: 341629
Junius Hill: 288946
Letitia Macejkovic III: 707561
Dr. Lucius Pouros MD: 630893
Claire Zboncak: 505558
Mrs. Celia Heaney Sr.: 70369
Miss Bailee Reichel: 756288
Danika Bode DVM: 138820
Mrs. Marjory Wiza V: 393143
Prof. Ressie Gusikowski: 321551
Prof. Henderson Leffler DVM: 187024
Everette Ritchie Sr.: 875059
Duncan Bartoletti: 653316
Virgie Green: 549635
Miss Precious Pacocha DDS: 269835
Prof. Emelie Carroll: 688522
Yvette Labadie: 507396
Kelli Bashirian II: 515138
Lolita Cummings I: 83413
Carli Boehm: 625855
Eunice Bogan: 148108
Willis Graham: 469860
Price Glover: 538185
Meaghan Lang: 921243
Freda Huels: 369191
Troy Wisozk: 101082
Maymie Rodriguez: 605515
Carley Kulas: 763769
Jalyn Collins PhD: 710817
Stanton Kub: 569822
Ansley Rowe: 263877
Dr. Muriel Cummerata Sr.: 665788
Virginie Herzog: 327011
Nico Dickinson: 552989
Gerson Howell: 601626
Gustave Fay I: 53917
Brad O’Hara: 353385
Cindy Kozey: 445778
Carli Nicolas: 907966
Kasandra Stark: 215163
Fae Sauer: 111735
Kaley Cassin: 469384
Larry Carter: 949933
Miss Clementina Harber: 616500
Ms. Amaya Klein: 74025
Ms. Rachel Torp: 501640
Stephen Leffler I: 596977
Lenny Schamberger: 113975
Eino King: 473646
Destiny Weissnat: 274336
Jenifer Lebsack: 767815
Jett Langworth: 410745
Mr. Ryley Ernser PhD: 909222
Amy O’Reilly: 32429
Benny Paucek: 280160
Haley Balistreri III: 313339
Prof. Kenna Shields V: 50567
Dr. Nasir Rippin MD: 894446
Alvera Rodriguez: 872289
Mr. Henderson Kautzer II: 122842
Herbert Kshlerin: 577192
Dawn VonRueden: 339820
Wellington Parker: 619041
Magdalen Bartell: 329227
Dr. Lorna Koelpin: 508329
Arne Mayert: 570767
Geovanny Davis Jr.: 187601
Adelle Marks: 440394
Prof. Paxton Hirthe: 207269
Cecile Hahn: 662167
Prof. Monserrat Kassulke II: 767649
Prof. Dorian Parisian: 511125
Riley Koch: 716438
Miss Ernestina Davis DVM: 341211
Prof. Marilou Macejkovic: 832067
Lela Deckow: 407904
Katarina Champlin: 627890
Miss Katarina Murray I: 755250
Hunter Wisoky: 680404
Alda Swift: 365616
Prof. Jean Upton: 497176
Mrs. Beatrice Corkery II: 297312
Mr. Liam Leffler Jr.: 239232
Maria Wiza: 197932
Mrs. Wilhelmine Becker II: 820504
Prof. Nathan Bosco: 419327
Colin Glover: 423602
Mr. Zachary Donnelly: 750397
Idell McKenzie: 329368
Ms. Sabryna Keebler: 263805
Dr. Jamison Dach: 434027
Ruben Hahn: 213540
Mr. Jedediah Beer MD: 707876
Gladyce Schinner: 351060
Lorena Hackett: 215013
Gene Reichel: 752863
Mrs. Teresa Renner: 726749
Willis McKenzie: 854739
Albert Kessler Jr.: 598497
Alta Labadie: 236385
Hulda Schmitt: 902438
Issac Feeney: 635619
Janis Ruecker DDS: 866722
Aidan Ward: 883515
Naomi Powlowski: 661622
Dr. Leon Klocko: 719711
Marguerite Schmidt: 695033
Jeremy Waelchi: 295984
Stacy Heathcote: 674822
Hettie Borer: 654743
Reina Muller: 145204
Prof. Amanda Cronin Jr.: 238858
Ottis Johnson: 785530
Hubert Stokes: 518928
Raleigh Torp: 468268
Brittany Dibbert: 401419
Odie Deckow Sr.: 147463
Prof. Macy Cruickshank V: 133327
Miss Emmanuelle Volkman MD: 88834
Ms. Elise Kautzer: 297825
Stanley Hyatt: 388216
Pablo Wehner: 447748
Prof. Sean Walsh: 524832
Ms. Anya Harber: 375619
Remington Hettinger: 424128
June Sawayn: 348416
Mr. Lucio Stracke: 373348
Juston Hilpert: 674869
Cydney Watsica: 348266
Prof. Edmund Harris: 570878
Vada Kuphal: 344598
Miss Ally Welch: 652769
Brendan Waelchi DDS: 647559
Halle Ratke: 589947
Sofia Wintheiser: 251250
Emmett Blanda: 661750
Neoma Prohaska IV: 21412
Prof. Dedrick Champlin: 399334
Kade Terry: 241740
Issac Stracke DVM: 589025
Kelsi Hickle: 774587
Prof. Adam Cremin PhD: 602184
Rod Stamm: 215479
Frida Erdman: 225045
Mr. Gaetano Schuppe: 439686
Lilian Greenfelder DVM: 410906
Ahmad Witting: 728838
Skylar Sporer: 790793
Mrs. Nelle Hyatt: 680553
Miss Mylene Paucek IV: 302722
Ms. Kira Metz: 208574
Iva Gutmann: 885259
Judah Bradtke: 524479
Kennedi Romaguera: 665842
Dr. Effie Kunde V: 361377
Madonna Mueller: 407218
Elouise Baumbach: 314317
Donna Weber: 632804
Josie Hamill: 546896
Abdullah Goyette: 599907
Miss Hailie Maggio: 282661
Laverne Conn: 684884
Prof. Wayne Gleichner Sr.: 557219
Mr. Chance Sporer: 822469
Kacie Collins: 589616
Prof. Columbus Boyle DVM: 585999
Dr. Daisy Friesen I: 674889
Alexzander Von Jr.: 262640
Dr. Kelvin Brekke I: 650392
Haleigh Conroy: 167478
Mrs. Danielle Spinka: 659554
Dudley McKenzie IV: 690607
Mrs. Katlyn Hodkiewicz: 796234
Bradly Runolfsson V: 868941
Dr. Carley Hodkiewicz: 306961
Drew Wilkinson II: 745926
Beatrice Kulas: 730844
Norval Abshire: 253395
Gilda Bashirian: 60303
Renee Schneider Jr.: 660116
Prof. Avery Powlowski: 279624
Mr. Micah Steuber: 840637
Trenton Jenkins: 489912
Francisca D’Amore: 467265
Dr. Damion O’Hara PhD: 180306
Amira Becker: 891961
Katrina Klocko III: 698501
Amira Crist: 509880
Salvador Nikolaus: 239919
Wilford Simonis: 581747
Lilian Bayer: 468263
Cornelius Ullrich: 725251
Winfield Becker Jr.: 605775
Kelsi Becker: 105632
Andres Dickinson: 864034
Renee Thompson: 709709
Claudie Reichert: 622363
Omari Kuvalis: 476698
Dax Fay: 147203
Quinn Kassulke: 292005
Myah Bahringer: 332687
Lexi Paucek: 481889
Dr. Darren Rau V: 369303
Prof. Emil Orn II: 880708
Willow Koepp: 330740
Roxanne Welch: 407138
Wilma Wiegand: 881468
Mr. Isaias Stroman II: 910924
Immanuel Cronin: 619235
Tyler Rodriguez: 759478
Prof. Darryl Wuckert I: 207982
Kade Sipes: 439601
Mr. Diego Lockman: 233622
Verdie Goldner: 806801
Nikki Schuppe: 904360
Derek Breitenberg: 761520
Cortney Jakubowski III: 852252
Denis Krajcik: 450611
Emory Langworth: 168963
Candido Cole: 329539
Kristy Orn MD: 854363
Jaron Parker DVM: 753173
Dr. Tyreek Gibson III: 794948
Jackson Lakin: 697866
Mallie O’Kon Sr.: 940839
Uriah Conroy: 848599
Rusty Romaguera: 174942
Dr. Laurence Hansen: 873040
Amya Blanda V: 747850
Christy Olson: 625731
Mr. Kaleb Williamson Jr.: 783437
Luis Aufderhar: 393700
Madelynn Schulist: 704851
Novella Towne: 164129
Monica Casper: 484116
Prof. Adrain Rosenbaum Jr.: 708775
Erik Heathcote: 532258
Sally Abbott Jr.: 184565
Miss Mckayla Toy: 383134
Nina Russel: 557990
Caterina Fadel: 405218
Beryl Hill IV: 596747
Jarred Bosco V: 562707
Michaela Emard: 685858
Salvador Wilderman: 471630
Shane Miller: 19992
Ms. Maya Emmerich: 152982
Prof. Devyn McCullough DVM: 714284
Cathy Satterfield IV: 250511
Travon Prosacco: 427169
Nikki Nienow: 893922
Mr. Burley Hauck: 636744
Marianna Mann II: 298210
Mandy Muller III: 923569
Dr. Meggie Ebert: 771074
Verla Ritchie: 245839
Brock Cormier: 172300
Dr. Ivory Schmitt: 469022
Dr. Eldon McGlynn: 760367
Arnulfo Stokes: 74166
Letitia Gaylord PhD: 448377
Magali Keeling: 469964
Angeline Stiedemann: 452146
Keyon Kunze: 504497
Christiana Gorczany: 684710
Gina Wilkinson: 613363
Mr. Dereck Veum DDS: 80848
Ephraim Mosciski: 224922
Mrs. Ramona Pacocha III: 264234
Crawford Gleason: 663968
Elinore Willms: 285082
Dr. Delta Goodwin: 137593
Prof. Sincere Okuneva: 97927
Claire Kertzmann: 173749
Alberta Walker: 797730
Dr. Abraham Daniel: 256654
Nasir Nader MD: 571005
Dr. Lavern Blanda V: 871541
Mariana Altenwerth: 943941
Cecilia O’Kon: 315243
Prof. Justen Kshlerin: 420326
Jaime Predovic: 523645
Jadyn Hermiston: 191275
Maverick Beatty: 561706
Shayne Kub: 462364
Sienna Jast: 679910
Prof. Hunter Skiles V: 649337
Sandy Ortiz: 104677
Miss Heath Lubowitz I: 362067
Jeremie Fay Jr.: 333414
Thora Dare: 97127
Camron Rogahn: 414826
Dale Gaylord: 603181
Maggie Casper: 583942
Anabelle Bergnaum I: 628190
Michel Wehner: 958554
Duane Barton: 408304
Adelia Bednar: 763283
Prof. Geoffrey West: 558841
Tyree Bartoletti: 495760
Elyssa Lemke: 910667
Ova Hane: 629238
Jannie Schaefer: 236940
Olin Bins: 220712
Mary West: 472968
Miss Charity Oberbrunner: 758114
Miss Jaunita Konopelski: 825349
Mr. Jabari Zemlak: 494429
Lorine Larson: 811422
Felicia Pollich: 307220
Kaley Cronin PhD: 873081
Mr. Beau Price: 808790
Prof. Sigrid Bergnaum: 415265
Clarabelle Dooley PhD: 700015
Mr. Milan Moore: 934695
Myron Swift: 929659
Mr. Lavon Okuneva V: 172244
Brain Boyle: 917354
Ansley Bailey: 108983
Dr. Cecelia VonRueden II: 358094
Ms. Rae Reichel: 548703
Joshua Heller: 432017
Dr. Richmond Gerhold: 602239
Valentine Altenwerth: 679501
Prof. Bobbie Walsh PhD: 359132
Alex Sauer I: 443843
Granville Dickens: 384624
Emmett Kunde DDS: 180881
Ms. Bernadette Nikolaus IV: 343098
Casimer Prosacco: 558958
Meggie Heller: 579945
Nathanael Yost: 85682
Emerson O’Keefe: 656008
Mozell Dooley: 567895
Dr. Noemi Jast DVM: 695454
Margarett Vandervort: 656596
Prof. Matt Effertz DVM: 500454
Ernest Beier: 64232
Mallie Sauer: 896179
Tad Hodkiewicz: 282413
Mireille McLaughlin: 856640
Demetrius Wunsch Sr.: 327715
Benjamin Rippin MD: 256349
Denis Ward: 848818
Prof. Daren Stokes: 643277
Prof. Olaf Kirlin MD: 907386
Abigayle Cummings: 186450
Jamel Lemke II: 310829
Crystel Grant Jr.: 845793
Mr. Buster Marks V: 79319
Prof. Rowan Considine MD: 539517
Leann Stamm: 797831
Anna Williamson: 406155
Ms. Salma Reilly: 877710
Kallie Kovacek: 293753
Brady Heaney: 656622
Edwardo Romaguera: 699962
Dr. Hermina Ondricka Jr.: 903354
Salvatore Dickens: 240092
Savanna Volkman: 830758
Elisa Watsica DDS: 424549
Carol Cronin: 688940
Mallie Schumm: 110349
Mr. Clint Terry: 308961
Angela Torp: 567890
Dr. Lowell Casper III: 640641
Yasmin Prosacco: 329973
Korbin Carter: 901289
Citlalli Cremin: 337660
Royal Torp: 900844
Fae Haley: 852078
Aglae Jaskolski: 865267
Mr. Dario Lynch II: 612040
Kennith Schowalter: 158151
Vicky Adams II: 587818
Noemi Maggio PhD: 185672
Gillian Leuschke: 887076
Lulu Mohr: 225109
Ms. Sydnee Jacobi: 257140
Prof. Olen Keebler V: 220246
Prof. Rebeca Stamm: 290762
Prof. Carissa Rau: 659435
Prof. Tiffany Balistreri: 490589
Prof. Arianna Mayer: 177721
Elisa Hand: 142415
Roselyn Schmitt: 856008
Kara Feest: 57988
Elaina Feeney: 285857
Beau Ullrich: 513054
Tommie Jerde: 858737
Rosanna Bruen: 141087
Mrs. Lauryn Will DVM: 861143
Dr. Newton Krajcik V: 427198
Prof. Dameon Daniel MD: 70569
Miss Tamara Shanahan III: 789574
Oswald Ratke: 116841
Uriah Wilderman: 655271
Jeanne Reichert: 124512
Mr. Albert Beatty DVM: 673793
Mrs. Adah Ritchie III: 640896
Olin Von II: 255582
Randy Rath: 342219
Mr. Drake Hickle: 113940
Andreane Dietrich: 861753
Dr. Newton Kertzmann: 217651
Katherine Stehr: 744867
Prof. Rozella Stehr: 148863
Ward O’Hara: 130488
Dr. Barry Treutel: 95477
Anabelle Auer: 526163
Precious Hegmann Sr.: 843048
Mr. Obie McCullough: 215966
Maggie McLaughlin: 819849
Prof. Stanley Gerhold: 329307
Anais Koch: 576744
Edythe Waelchi MD: 752404
Elody Casper: 745070
Jamir Wiza: 733498
Elenora Lockman: 788746
Lavon Wisozk: 172454
Damien Feeney: 533248
Edwin Green: 457633
Prof. Cristina Greenfelder: 607737
Cody Lind: 226475
Lavinia Bergnaum III: 330392
Rodrick Cassin III: 282694
Luther Cronin III: 444340
Emelia Oberbrunner: 109099
Bart Russel V: 215898
Mrs. Cydney Champlin I: 503200
Prof. Arianna Luettgen: 528286
Carolanne Doyle DVM: 199408
Ova Schoen: 790156
Geo Powlowski: 464989
Dr. Rogers Emmerich: 628734
Graciela Gottlieb DDS: 122366
Golden Schneider: 893124
Izaiah Cummerata: 621225
Jason Rowe: 221746
Rupert Hammes: 685621
Christop Jones: 747961
Ray Erdman: 375781
Prof. Tabitha Fritsch: 604468
Ladarius Mertz: 605362
Jany Cruickshank V: 538807
Elenor Quitzon: 362755
Prof. Mae Satterfield: 554990
Mrs. Katelyn Kiehn PhD: 759243
Mr. Americo Lehner PhD: 421347
Dr. Bertha Stokes: 252760
Miss Marie Brown II: 344306
Anika Kub: 635776
Nova Nitzsche: 175645
Dr. Melany Hayes: 610746
Prof. Tiffany Sawayn: 186949
Ms. Marianne Rolfson PhD: 561621
Denis Thompson: 421043
Devante VonRueden: 503400
Yasmin Parisian: 914030
Abraham Kuhic: 85436
Jason Fahey: 501046
Liliane Jakubowski: 157611
Prof. Bettye Hayes: 801446
Beryl Gutkowski: 242023
Jeanette Lueilwitz: 476880
Jolie Boehm IV: 258878
Mandy Medhurst Sr.: 220536
Jadon Leannon: 692453
Malika Balistreri: 566738
Marietta Spinka: 980009
Darryl Jast: 188811
Dr. Laron Barrows PhD: 87082
Claudie Rutherford: 827422
Timmothy Hoeger Jr.: 581042
Cole O’Kon II: 349283
Dr. Reagan Rosenbaum: 563400
Clarissa Senger: 760993
Mr. Ignatius Ryan: 954118
Clifton Toy: 776556
Vivianne Thiel: 505146
Dr. Delaney Abbott PhD: 559707
Kristofer Durgan: 267724
Estell Gottlieb: 97169
Braden Swift: 745002
Viva Schamberger: 346553
Elenor Reinger: 132970
Prof. Morton Mohr: 807996
Prof. Edwardo O’Reilly DDS: 342344
Lila Strosin: 740269
Kamren Roob: 558382
Antwan Cremin: 838963
Dr. Coy Altenwerth: 612571
Brook Rippin: 728480
Bernardo Hintz: 464935
Trinity Waelchi: 741771
Alexanne Wunsch Jr.: 724913
Marie Lebsack: 292551
Ernie Hand I: 486907
Jacklyn Bogan Sr.: 105833
Ray Abshire MD: 832261
Shyanne Zboncak: 803076
Lilian Runolfsdottir: 468014
Helmer Schmidt: 883439
Glenda Batz IV: 630700
Omer Hagenes: 78573
Mr. Carmel Spencer DDS: 649486
Dr. Pedro Lind: 209916
Mrs. Lucie Fritsch Jr.: 519865
Lindsay Littel MD: 616216
Ms. Odie Anderson: 952816
Dr. Mina Dibbert: 117350
Ms. Hettie Connelly: 442548
Hulda Schneider: 864448
Mrs. Mercedes Hammes: 207786
Dr. Corbin Schumm II: 570285
`;


const people = data
  .trim()
  .split('\n') 
  .map(line => {
    const [name, points] = line.split(':'); 
    return { name: name.trim(), points: parseInt(points.trim(), 10) }; 
  });


const top3 = people.sort((a, b) => b.points - a.points).slice(0, 3);


const top3Results = top3
  .map((person, index) => `${index + 1}. ${person.name}: ${person.points}`)
  .join('\n');


fs.writeFile('top3_results.txt', top3Results, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Top 3 results have been saved to top3_results.txt');
  }
});
