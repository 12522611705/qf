export const config = {
	// 公用接口
	urls:{
		exportDepositLogExcel:'http://118.190.145.65:8888/flockpeak-shop/flockpeak-shop/exportExcel/exportDepositLogExcel',
		exportGrbageHourQuantity:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/exportGrbageHourQuantity',
		streetList:'http://118.190.145.65:8888/flockpeak-shop/atlasCenter/streetList',
		adminUserDetailsByToken:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/adminUserDetailsByToken',
		exportGarbageExcel:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/exportGarbageExcel',
		exportCategoryExcel:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/exportCategoryExcel',
		exportGarbageLogExcel:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/exportGarbageLogExcel'
	},
	// 投放时间断统计
	Hour:{
		urls:{
			garbageHourQuantity:'http://118.190.145.65:8888/flockpeak-shop/admin/dataStatisticsAdmin/garbageHourQuantity'
		}
	},
	// 垃圾分类每天数据汇总
	Day:{
		urls:{
			garbageDayQuantity:'http://118.190.145.65:8888/flockpeak-shop/admin/dataStatisticsAdmin/garbageDayQuantity'

		}
	},
	// 垃圾分类设备数据汇总
	Sum:{
		urls:{
			garbageSumQuantity:'http://118.190.145.65:8888/flockpeak-shop/admin/dataStatisticsAdmin/garbageSumQuantity'
		}
	},
	// 活跃和非活跃用户数量的统计
	Active:{
		urls:{
			userActiveQuantity:'http://118.190.145.65:8888/flockpeak-shop/admin/dataStatisticsAdmin/userActiveQuantity'
		}
	},
	// 用户了趋势统计
	Trend:{
		urls:{
			userTrendQuantity:'http://118.190.145.65:8888/flockpeak-shop/admin/dataStatisticsAdmin/userTrendQuantity'
		}
	},
	// 用户年龄段统计
	UserAge:{
		urls:{
			userAgeQuantity:'http://118.190.145.65:8888/flockpeak-shop/admin/dataStatisticsAdmin/userAgeQuantity'
		}
	},
	// 用户量统计
	Quantity:{
		urls:{
			userQuantity:'http://118.190.145.65:8888/flockpeak-shop/admin/dataStatisticsAdmin/userQuantity'
		}
	},
	// 查询设备管理
	Garbage:{
		urls:{
			add:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageAdmin/add',
			delete:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageAdmin/delete',
			importExcelGarbage:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageAdmin/importExcelGarbage',
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageAdmin/list',
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageAdmin/update'
		},
		permission:{
			'/flockpeak-shop/admin/garbageAdmin/add':'add',
			'/flockpeak-shop/admin/garbageAdmin/delete':'delete',
			'/flockpeak-shop/admin/garbageAdmin/importExcelGarbage':'importExcelGarbage',
			'/flockpeak-shop/admin/garbageAdmin/list':'list',
			'/flockpeak-shop/admin/garbageAdmin/update':'update'
		}
	},
	//  回收种类及价格维护管理
	Category:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageCategoryAdmin/list',
			add:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageCategoryAdmin/add',
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageCategoryAdmin/update'
		},
		permission:{
			'/flockpeak-shop/admin/garbageCategoryAdmin/list':'list',
			'/flockpeak-shop/admin/garbageCategoryAdmin/add':'add',
			'/flockpeak-shop/admin/garbageCategoryAdmin/update':'update'
		}
	},
	// 回收记录列表
	GarbageLog:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageLogAdmin/list',
			queryList:'http://118.190.145.65:8888/flockpeak-shop/admin/garbageLogAdmin/queryList'
		},
		permission:{
			'/admin/garbageLogAdmin/list':'list',
			'/admin/garbageLogAdmin/queryList':'queryList',
			'/admin/garbageLogAdmin/details':'details'
		}
	},
	// 用户列表
	UserAdmin:{
		urls:{
			audit:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/audit',
			updateIntegral:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/updateIntegral',
			userExcel:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/userExcel',
			importExcelUser:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/importExcelUser',
			garbageOrderList:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/garbageOrderList',
			depositList:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/depositList',
			updataUserAdmin:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/updataUserAdmin',
			addUserAdmin:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/addUserAdmin',
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/list',
			add:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/add',
			exitLogin:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/exitLogin',
			login:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/login',
			menuList:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/menuList',
			adminUserDetailsByToken:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/adminUserDetailsByToken',
			adminUserList:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/adminUserList',
			deleteUser:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/deleteUser',
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/update',
			details:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/details',
			deleteUserAdmin:'http://118.190.145.65:8888/flockpeak-shop/admin/userAdmin/deleteUserAdmin'
		},
		router:{},
		permission:{
			'/flockpeak-shop/admin/userAdmin/importExcelUser':'importExcelUser',
			'/flockpeak-shop/exportExcel/userExcel':'userExcel',
			'/flockpeak-shop/admin/userAdmin/updateIntegral':'updateIntegral',
			'/flockpeak-shop/admin/userAdmin/garbageOrderList':'garbageOrderList',
			'/flockpeak-shop/admin/userAdmin/depositList':'depositList',
			'/flockpeak-shop/admin/userAdmin/deleteUserAdmin':'deleteUserAdmin',
			'/flockpeak-shop/admin/userAdmin/addUserAdmin':'addUserAdmin',
			'/flockpeak-shop/admin/userAdmin/updataUserAdmin':'updataUserAdmin',
			'/flockpeak-shop/admin/userAdmin/list':'userAdminList',
			'/flockpeak-shop/admin/userAdmin/details':'userAdminDetails',
			'/flockpeak-shop/admin/userGradeLog/list':'userGradeLogList',
			'/flockpeak-shop/admin/userGradeLog/details':'userGradeLogDetails',
			'/flockpeak-shop/admin/walletAdmin/list':'walletAdminList',
			'/flockpeak-shop/admin/walletAdmin/details':'walletAdminDetails',
			'/flockpeak-shop/admin/userAdmin/exportUserExcel':'userAdminExportUserExcel'
		}
	},
	// 权限管理
	JurisdictionAdmin:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/jurisdictionAdmin/list',
			listAll:'http://118.190.145.65:8888/flockpeak-shop/admin/jurisdictionAdmin/listAll',
		}
	},
	// 后台用户等级积分管理
	UserGradeLog:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/userGradeLog/list',
			details:'http://118.190.145.65:8888/flockpeak-shop/admin/userGradeLog/details'
		}
	},
	// 用户环保金额管理
	WalletAdmin:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/walletAdmin/list',
			details:'http://118.190.145.65:8888/flockpeak-shop/admin/walletAdmin/details'
		}
	},
	// 环卫车管理
	SanitationCarAdmin:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/sanitationCarAdmin/list',		
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/sanitationCarAdmin/update',		
			delete:'http://118.190.145.65:8888/flockpeak-shop/admin/sanitationCarAdmin/delete',		
			details:'http://118.190.145.65:8888/flockpeak-shop/admin/sanitationCarAdmin/details',		
			add:'http://118.190.145.65:8888/flockpeak-shop/admin/sanitationCarAdmin/add',	
			exportSanitationCarExcel:'http://118.190.145.65:8888/flockpeak-shop/admin/sanitationCarAdmin/exportSanitationCarExcel',
			sanitationCarExcel:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/sanitationCarExcel',
		},
		permission:{
			'/sanitationCarAdmin/details':'details',
			'/flockpeak-shop/admin/sanitationCarAdmin/delete':'delete',
            '/flockpeak-shop/admin/sanitationCarAdmin/add':'add',
            '/flockpeak-shop/admin/sanitationCarAdmin/update':'update',
            '/flockpeak-shop/admin/sanitationCarAdmin/list':'list',
            '/flockpeak-shop/admin/sanitationCarAdmin/details':'details'
		}
	},
	// 角色管理
	RoleAdmin:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/roleAdmin/list',
			details:'http://118.190.145.65:8888/flockpeak-shop/admin/roleAdmin/details',
			delete:'http://118.190.145.65:8888/flockpeak-shop/admin/roleAdmin/delete',
			addMenuToRole:'http://118.190.145.65:8888/flockpeak-shop/admin/roleAdmin/addMenuToRole',
			addRoleToAdminUser:'http://118.190.145.65:8888/flockpeak-shop/admin/roleAdmin/addRoleToAdminUser',
			addRole:'http://118.190.145.65:8888/flockpeak-shop/admin/roleAdmin/addRole',
			roleListByUserId:'http://118.190.145.65:8888/flockpeak-shop/admin/roleAdmin/roleListByUserId',
		},
		permission:{
			'/flockpeak-shop/admin/roleAdmin/list':'roleAdminList',
			'/flockpeak-shop/admin/roleAdmin/delete':'roleAdminDelete',
			'/flockpeak-shop/admin/roleAdmin/addMenuToRole':'roleAdminAddMenuToRole',
			'/flockpeak-shop/admin/roleAdmin/addRoleToAdminUser':'roleAdminAddRoleToAdminUser',
			'/flockpeak-shop/admin/roleAdmin/details':'roleAdminDetails',
			'/flockpeak-shop/admin/jurisdictionAdmin/list':'jurisdictionAdminList',
			'/flockpeak-shop/admin/jurisdictionAdmin/listAll':'jurisdictionAdminListAll',
			'/flockpeak-shop/admin/roleAdmin/addRole':'roleAdminAddRole',
			'/flockpeak-shop/admin/roleAdmin/roleListByUserId':'roleAdminRoleListByUserId',
			'/flockpeak-shop/admin/adminAddres/addAddresToAdminUser':'adminAddresAddAddresToAdminUser'
		}
	},
	// 收运费记录
	CollectorLog:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/collectorLog/list',
			exportCollectorLogExcel:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/exportCollectorLogExcel',
			importingCollectorLog:'http://118.190.145.65:8888/flockpeak-shop/admin/collectorLog/importingCollectorLog',
			updataCollectorLog:'http://118.190.145.65:8888/flockpeak-shop/admin/collectorLog/updataCollectorLog',
			deteleCollectorLog:'http://118.190.145.65:8888/flockpeak-shop/admin/collectorLog/deteleCollectorLog',
			addCollectorLog:'http://118.190.145.65:8888/flockpeak-shop/admin/collectorLog/addCollectorLog'
		},
		permission:{
			'/flockpeak-shop/admin/collectorLog/list':'list',
			'/flockpeak-shop/exportExcel/exportCollectorLogExce':'exportCollectorLogExce',
			'/flockpeak-shop/admin/collectorLog/importingCollectorLog':'importingCollectorLog',
			'/flockpeak-shop/admin/collectorLog/updataCollectorLog':'updataCollectorLog',
			'/flockpeak-shop/admin/collectorLog/deteleCollectorLog':'deteleCollectorLog',
			'/flockpeak-shop/admin/collectorLog/addCollectorLog':'addCollectorLog'
		}
	},
	// 推文管理
	Notification:{
		urls:{
			notificationAdd:'http://118.190.145.65:8888/flockpeak-shop/admin/notificationAdmin/notificationAdd',
			notificationDelete:'http://118.190.145.65:8888/flockpeak-shop/admin/notificationAdmin/notificationDelete',
			notificationList:'http://118.190.145.65:8888/flockpeak-shop/admin/notificationAdmin/notificationList',
			notificationPublish:'http://118.190.145.65:8888/flockpeak-shop/admin/notificationAdmin/notificationPublish',
			notificationUpdate:'http://118.190.145.65:8888/flockpeak-shop/admin/notificationAdmin/notificationUpdate',
			exportNotificationExcel:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/exportNotificationExcel'
		},
		permission:{
			'/flockpeak-shop/admin/notificationAdmin/notificationList':'notificationList',
			'/flockpeak-shop/admin/notificationAdmin/notificationAdd':'notificationAdd',
			'/flockpeak-shop/admin/notificationAdmin/notificationUpdate':'notificationUpdate',
			'/flockpeak-shop/admin/notificationAdmin/notificationDelete':'notificationDelete',
			'/flockpeak-shop/admin/notificationAdmin/notificationPublish':'notificationPublish',
		}
	},
	// 意见反馈
	Feedback:{
		urls:{
			feedbackList:'http://118.190.145.65:8888/flockpeak-shop/admin/feedbackAdmin/feedbackList',
			deleteFeedback:'http://118.190.145.65:8888/flockpeak-shop/admin/feedbackAdmin/deleteFeedback',
			updateFeedback:'http://118.190.145.65:8888/flockpeak-shop/admin/feedbackAdmin/updateFeedback',
			exportFeedbackExcel:'http://118.190.145.65:8888/flockpeak-shop/exportExcel/exportFeedbackExcel'
		},
		permission:{
			'/flockpeak-shop/admin/feedbackAdmin/deleteFeedback':'deleteFeedback',
			'/flockpeak-shop/admin/feedbackAdmin/updateFeedback':'updateFeedback',
			'/feedback/details':'details'
		}
	},
	// 身份验证管理
	Card:{
		urls:{
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/cardAdmin/list',
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/cardAdmin/update',
			add:'http://118.190.145.65:8888/flockpeak-shop/admin/cardAdmin/add',
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/cardAdmin/update',
		},
		permission:{
			'/flockpeak-shop/admin/cardAdmin/list':'list',
			'/flockpeak-shop/admin/cardAdmin/update':'update',
			'/flockpeak-shop/admin/cardAdmin/add':'add'
		}
	},
	// 司机管理
	Driver:{
		urls:{
			add:'http://118.190.145.65:8888/flockpeak-shop/admin/driverAdmin/add',
			delete:'http://118.190.145.65:8888/flockpeak-shop/admin/driverAdmin/delete',
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/driverAdmin/list',
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/driverAdmin/update'
		},
		permission:{
			'/flockpeak-shop/admin/driverAdmin/list':'list',
			'/flockpeak-shop/admin/driverAdmin/add':'add',
			'/flockpeak-shop/admin/driverAdmin/delete':'delete',
			'/flockpeak-shop/admin/driverAdmin/update':'update',
		}
	},
	// 提现管理
	Deposit:{
		urls:{
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/depositLogAdmin/update',
			approval:'http://118.190.145.65:8888/flockpeak-shop/admin/depositLogAdmin/approval',
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/depositLogAdmin/list'
		},
		permission:{
			'/flockpeak-shop/admin/depositLogAdmin/list':'list',
			'/flockpeak-shop/admin/depositLogAdmin/update':'update',
			'/flockpeak-shop/admin/depositLogAdmin/approval':'approval',
			'/depositLogAdmin/details':'details'
		}
	},
	// 区域管理
	Addres:{
		urls:{
			userCommunityListByCode:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/userCommunityListByCode',
			add:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/add',
			list:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/list',
			delete:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/delete',
			addAddresToAdminUser:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/addAddresToAdminUser',
			add:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/add',
			update:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/update',
			streetList:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/streetList',
			userAreaList:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/userAreaList',
			userCityList:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/userCityList',
			userCommunityList:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/userCommunityList',
			userProvinceList:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/userProvinceList',
			userStreetList:'http://118.190.145.65:8888/flockpeak-shop/admin/adminAddres/userStreetList',
		}
	}
}